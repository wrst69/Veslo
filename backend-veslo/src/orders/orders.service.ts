import { Injectable } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { DbService } from 'src/db/db.service';
import { NodesService } from 'src/nodes/nodes.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { NotificationTypes, OrderStatuses, OrderUpdateTypes } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(
    private db: DbService, 
    private nodesService: NodesService, 
    private notificationsService: NotificationsService
  ) {}

  async getOrders() {
    return await this.db.order.findMany({
      where: {status: { not: OrderStatuses.DELETED}},
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        type: true,
        status: true,
        owner: { select: { id: true, name: true } },
        node: { select: { lersId: true } },
        measurePoint: { select: { lersId: true, title: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createOrder(userId: number, dto: CreateOrderDto) {
    let node = await this.nodesService.checkNodeExist(dto.nodeLersId);

    if (!node) {
      node = await this.nodesService.createNode({
        lersId: dto.nodeLersId,
        title: dto.nodeTitle,
      });
    }

    let measurePoint = await this.nodesService.checkMeasurePointExist(
      dto.measurePointLersId,
    );

    if (!measurePoint) {
      measurePoint = await this.nodesService.createMeasurePoint({
        lersId: dto.measurePointLersId,
        title: dto.measurePointTitle,
        nodeId: node.id,
      });
    }

    const recipients = dto.recipients.map((recipient) => ({id: recipient}))

    const order = await this.db.order.create({
      data: {
        ownerId: userId,
        description: dto.description,
        type: dto.type,
        measurePointId: measurePoint.id,
        nodeId: node.id,
        recipients: { connect: recipients }
      },
    });

    if (order) {
      this.notificationsService.createNotifications({ orderId: order.id, recipients: recipients, type: NotificationTypes.NEW_ORDER })
    }

    return order;
  }

  async updateOrder(userId: number, orderId: number, dto: UpdateOrderDto) {
    const order = await this.db.order.update({ where: {id: orderId}, data: { ...dto, ownerId: userId }, select: {id: true, recipients: { select: { id: true }}}});

    if (order) {
      switch (dto.status) {
        case OrderStatuses.PROCESSING:
          this.notificationsService.createNotifications({ orderId: order.id, recipients: order.recipients, type: NotificationTypes.ORDER_ACCEPTED });
          break;
        case OrderStatuses.SUCCESS:
          this.notificationsService.createNotifications({ orderId: order.id, recipients: order.recipients, type: NotificationTypes.ORDER_COMPLETED });
          break;
        case OrderStatuses.FAILED:
          this.notificationsService.createNotifications({ orderId: order.id, recipients: order.recipients, type: NotificationTypes.ORDER_FAILED });
          break;
        default:
          this.notificationsService.createNotifications({ orderId: order.id, recipients: order.recipients, type: NotificationTypes.ORDER_UPDATED });
      }
    }
    
    return order;
  }
  
  async deleteOrder(id: number) {
    const order = await this.db.order.update({ where: { id }, data: {status: OrderStatuses.DELETED}, select: {id: true, recipients: { select: { id: true }}}});

    if (order) {
      this.notificationsService.createNotifications({ orderId: order.id, recipients: order.recipients, type: NotificationTypes.ORDER_DELETED })
    }
    
    return order;
  }
}
