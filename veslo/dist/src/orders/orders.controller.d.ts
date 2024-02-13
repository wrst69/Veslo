import { OrdersService } from './orders.service';
import { getSessionInfoDto } from 'src/users/auth/dto';
import { OrderDto, UpdateOrderDto } from './dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getOrders(): Promise<{
        id: number;
        ownerId: number;
        nodeId: number;
        measurePointId: number;
        title: string;
        isClosed: boolean;
    }[]>;
    getOrdersByUserId(session: getSessionInfoDto): Promise<{
        id: number;
        ownerId: number;
        nodeId: number;
        measurePointId: number;
        title: string;
        isClosed: boolean;
    }[]>;
    createOrder(dto: OrderDto, session: getSessionInfoDto): Promise<OrderDto>;
    updateOrder(dto: UpdateOrderDto, session: getSessionInfoDto): Promise<OrderDto>;
    deleteOrder(orderId: number): void;
}
