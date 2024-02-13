import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { SessionInfo } from 'src/users/auth/session-info.decorator';
import { getSessionInfoDto } from 'src/users/auth/dto';
import { OrderDto, UpdateOrderDto } from './dto';

@Controller('orders')
@UseGuards(AuthGuard)
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getOrders() {
    return this.ordersService.getOrders();
  }

  @Get()
  getOrdersByUserId(@SessionInfo() session: getSessionInfoDto) {
    return this.ordersService.getOrdersByUserId(session.id);
  }

  @Post()
  createOrder(
    @Body() dto: OrderDto,
    @SessionInfo() session: getSessionInfoDto,
  ): Promise<OrderDto> {
    return this.ordersService.createOrder(session.id, dto);
  }

  @Patch()
  updateOrder(
    @Body() dto: UpdateOrderDto,
    @SessionInfo() session: getSessionInfoDto,
  ): Promise<OrderDto> {
    return this.ordersService.updateOrder(session.id, dto);
  }

  @Delete()
  deleteOrder(orderId: number) {
    //return this.ordersService.deleteOrder(orderId);
  }
}
