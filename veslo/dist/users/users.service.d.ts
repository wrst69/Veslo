import { Roles } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class UsersService {
    private db;
    constructor(db: DbService);
    create(login: string, name: string, role: Roles, hash: string, salt: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        hash: string;
        salt: string;
        login: string;
        avatar: string | null;
        role: import(".prisma/client").$Enums.Roles;
    }>;
    findByLogin(login: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        hash: string;
        salt: string;
        login: string;
        avatar: string | null;
        role: import(".prisma/client").$Enums.Roles;
    } | null>;
    findById(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        hash: string;
        salt: string;
        login: string;
        avatar: string | null;
        role: import(".prisma/client").$Enums.Roles;
    } | null>;
}
