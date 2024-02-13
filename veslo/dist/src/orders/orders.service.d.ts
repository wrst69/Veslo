import { OrderDto, UpdateOrderDto } from './dto';
import { DbService } from 'src/db/db.service';
export declare class OrdersService {
    private db;
    constructor(db: DbService);
    getOrders(): Promise<{
        id: number;
        ownerId: number;
        nodeId: number;
        measurePointId: number;
        title: string;
        isClosed: boolean;
    }[]>;
    getOrdersByUserId(userId: number): Promise<{
        id: number;
        ownerId: number;
        nodeId: number;
        measurePointId: number;
        title: string;
        isClosed: boolean;
    }[]>;
    createOrder(userId: number, dto: OrderDto): Promise<{
        id: number;
        ownerId: number;
        nodeId: number;
        measurePointId: number;
        title: string;
        isClosed: boolean;
    }>;
    updateOrder(userId: number, dto: UpdateOrderDto): Promise<{
        id: number;
        ownerId: number;
        nodeId: number;
        measurePointId: number;
        title: string;
        isClosed: boolean;
    }>;
}
