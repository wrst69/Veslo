import { JwtService } from '@nestjs/jwt';
import { PasswordService } from './password.service';
import { UserTestService } from '../users-test/users-test.service';
export declare class AuthTestService {
    private usersService;
    private passwordService;
    private jwtService;
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_NAME: string;
    constructor(usersService: UserTestService, passwordService: PasswordService, jwtService: JwtService);
    signIn(email: string, password: string): Promise<{
        accessToken: string;
        user: {
            id: number;
            name: string;
            hash: string;
            salt: string;
            login: string;
            avatar: string | null;
            createdAt: Date;
            updatedAt: Date;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
    signUp(login: string, name: string, role: any, password: string): Promise<{
        accessToken: string;
    }>;
}
