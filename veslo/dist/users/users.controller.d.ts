import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUserByLogin(login: string): Promise<{
        id: number;
        name: string;
        hash: string;
        salt: string;
        login: string;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role;
    } | null>;
}
