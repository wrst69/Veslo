import { MeasurePointLersId, NodeLersId } from '@/entities/node/_domain/types';
import { OrderStatus, OrderType } from './types';

export type CreateOrderDto = {
    nodeLersId: NodeLersId,
    nodeTitle: string,
    measurePointLersId: MeasurePointLersId,
    measurePointTitle: string,
    type: OrderType,
    description: string,
};

export type UpdateOrderDto = {
    type?: OrderType,
    description?: string,
    status?: OrderStatus,
};

export type DeleteOrderDto = number;
