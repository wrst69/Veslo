import { Injectable } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { DbService } from 'src/db/db.service';
import { NodesService } from 'src/nodes/nodes.service';

@Injectable()
export class OrdersService {
  constructor(private db: DbService, private nodesService: NodesService) {}

  async getOrders() {
    return await this.db.order.findMany({
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

    return await this.db.order.create({
      data: {
        description: dto.description,
        type: dto.type,
        ownerId: userId,
        measurePointId: measurePoint.id,
        nodeId: node.id,
      },
    });
  }

  async deleteOrder(id: number) {
    return await this.db.order.delete({ where: { id } });
  }
}
