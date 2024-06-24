import { MeasurePointLersId, NodeLersId } from '@/entities/node/_domain/types';
import { OrderId, OrderStatus, OrderType } from './types';
import { UserId } from '@/entities/user/_domain/types';

export type CreateOrderDto = {
    nodeLersId: NodeLersId,
    nodeTitle: string,
    measurePointLersId: MeasurePointLersId,
    measurePointTitle: string,
    type: OrderType,
    description: string,
    recipients: UserId[]
};

export type UpdateOrderDto = {
    id: OrderId,
    type?: OrderType,
    description?: string,
    status?: OrderStatus,
};

export type DeleteOrderDto = OrderId;
