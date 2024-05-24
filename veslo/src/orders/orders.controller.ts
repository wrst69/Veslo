import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  //@UseGuards(AuthGuard)
  getOrders() {
    return this.ordersService.getOrders();
  }

  @Post()
  @UseGuards(AuthGuard)
  createOrder(
    @Body() dto: CreateOrderDto,
    @SessionInfo() session: GetSessionInfoDto,
  ) {
    return this.ordersService.createOrder(session.id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteOrder(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.deleteOrder(id);
  }

  /*   @Patch()
  updateOrder(
    @Body() dto: UpdateOrderDto,
    @SessionInfo() session: getSessionInfoDto,
  ): Promise<OrderDto> {
    return this.ordersService.updateOrder(session.id, dto);
  } */
}
