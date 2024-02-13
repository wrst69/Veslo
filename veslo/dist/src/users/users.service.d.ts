import { DbService } from 'src/db/db.service';
import { UserRole } from 'types/user-role.enum';
export declare class UsersService {
    private db;
    constructor(db: DbService);
    findByName(name: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        role: string;
        hash: string;
        salt: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(name: string, role: UserRole, hash: string, salt: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        name: string;
        role: string;
        hash: string;
        salt: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
