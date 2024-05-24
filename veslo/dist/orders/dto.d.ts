import { OrderStatuses, OrderTypes } from '@prisma/client';
export declare class CreateOrderDto {
    nodeLersId: number;
    nodeTitle: string;
    measurePointLersId: number;
    measurePointTitle: string;
    description: string;
    type: OrderTypes;
}
export declare class UpdateOrderDto {
    description: string;
    type: OrderTypes;
    status: OrderStatuses;
}
