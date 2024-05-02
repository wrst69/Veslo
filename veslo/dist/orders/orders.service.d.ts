import { DbService } from 'src/db/db.service';
export declare class OrdersService {
    private db;
    constructor(db: DbService);
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
}
