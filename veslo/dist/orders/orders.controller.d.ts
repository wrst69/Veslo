import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto';
import { GetSessionInfoDto } from 'src/auth/dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
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
    createOrder(dto: CreateOrderDto, session: GetSessionInfoDto): Promise<{
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
