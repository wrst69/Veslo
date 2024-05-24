import { CreateOrderDto } from './dto';
import { DbService } from 'src/db/db.service';
import { NodesService } from 'src/nodes/nodes.service';
export declare class OrdersService {
    private db;
    private nodesService;
    constructor(db: DbService, nodesService: NodesService);
    getOrders(): Promise<{
        node: {
            lersId: number;
        };
        measurePoint: {
            title: string;
            lersId: number;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.OrderTypes;
        description: string;
        status: import(".prisma/client").$Enums.OrderStatuses;
        owner: {
            id: number;
            name: string;
        };
    }[]>;
    createOrder(userId: number, dto: CreateOrderDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        type: import(".prisma/client").$Enums.OrderTypes;
        status: import(".prisma/client").$Enums.OrderStatuses;
        ownerId: number;
        nodeId: number;
        measurePointId: number;
    }>;
    deleteOrder(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        type: import(".prisma/client").$Enums.OrderTypes;
        status: import(".prisma/client").$Enums.OrderStatuses;
        ownerId: number;
        nodeId: number;
        measurePointId: number;
    }>;
}
