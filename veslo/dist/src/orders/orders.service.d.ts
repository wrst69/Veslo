import { OrderDto } from './dto';
import { DbService } from 'src/db/db.service';
export declare class OrdersService {
    private db;
    constructor(db: DbService);
    getOrders(): Promise<{
        id: number;
        nodeId: number;
        measurePointId: number;
        status: string;
        cost: number;
    }[]>;
    createOrder(dto: OrderDto): Promise<{
        id: number;
        nodeId: number;
        measurePointId: number;
        status: string;
        cost: number;
    }>;
}
