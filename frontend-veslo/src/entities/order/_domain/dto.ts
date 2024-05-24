import { OrderStatuses, OrderTypes } from './types';

export type CreateOrderDto = {
    nodeLersId: number,
    nodeTitle: string,
    measurePointLersId: number,
    measurePointTitle: string,
    type: OrderTypes,
    description: string,
};

export type UpdateOrderDto = {
    type?: OrderTypes,
    description?: string,
    status?: OrderStatuses,
};

export type DeleteOrderDto = number;
