import { OrdersService } from './orders.service';
import { OrderDto } from './dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getOrders(): Promise<{
        id: number;
        nodeId: number;
        measurePointId: number;
        status: string;
        cost: number;
    }[]>;
    getOrdersByMeasurePointId(): void;
    createOrder(dto: OrderDto): Promise<OrderDto>;
}
