import { Role } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class UsersService {
    private db;
    constructor(db: DbService);
    findByLogin(login: string): Promise<{
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
    findById(id: number): Promise<{
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
    create(login: string, name: string, role: Role, hash: string, salt: string): Promise<{
        id: number;
        name: string;
        hash: string;
        salt: string;
        login: string;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
