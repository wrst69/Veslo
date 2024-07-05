import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { OrdersQuery } from './query/order.query';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  @UseGuards(AuthGuard)
  getOrders() {
    return this.ordersService.getOrders();
  }

  @Get('filter')
  async index(
    @Query() query: OrdersQuery
  ) {
    return await this.ordersService.getOrdersByFilter(query);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getOrderById(
    @Param('id', ParseIntPipe) orderId: number
  ) {
    return this.ordersService.getOrderById(orderId);
  }

  @Post()
  @UseGuards(AuthGuard)
  createOrder(
    @Body() dto: CreateOrderDto,
    @SessionInfo() session: GetSessionInfoDto,
  ) {
    return this.ordersService.createOrder(session.id, dto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  updateOrder(
    @SessionInfo() session: GetSessionInfoDto,
    @Param('id', ParseIntPipe) orderId: number,
    @Body() dto: UpdateOrderDto
  ) {
    return this.ordersService.updateOrder(session.id, orderId, dto);
  }

  @Patch('delete/:id')
  @UseGuards(AuthGuard)
  deleteOrder(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.deleteOrder(id);
  }
}
