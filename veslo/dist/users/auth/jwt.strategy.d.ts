import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private usersService;
    constructor(configService: ConfigService, usersService: UsersService);
    validate({ id }: {
        id: number;
    }): Promise<{
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
export {};
