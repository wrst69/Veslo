import { Injectable } from '@nestjs/common';
import { OrderDto, UpdateOrderDto } from './dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class OrdersService {
  constructor(private db: DbService) {}

  async getOrders() {
    return await this.db.order.findMany();
  }

  async createOrder(dto: OrderDto) {
    return await this.db.order.create({ data: { ...dto } });
  }

  /* async getOrdersByUserId(userId: number) {
    return await this.db.order.findMany({ where: { ownerId: userId } });
  }

  async createOrder(userId: number, dto: OrderDto) {
    return await this.db.order.create({ data: { ...dto, ownerId: userId } });
  }

  async updateOrder(userId: number, dto: UpdateOrderDto) {
    return await this.db.order.update({
      where: { id: dto.id },
      data: { ...dto, ownerId: userId },
    });
  } */

  //deleteOrder(id: number) {}
}
