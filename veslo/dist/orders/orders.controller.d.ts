import { OrdersService } from './orders.service';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getOrders(): Promise<{
        id: number;
        cost: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        measurePointId: number;
        nodeId: number;
        ownerId: number;
    }[]>;
    getOrdersByMeasurePointId(): void;
}
