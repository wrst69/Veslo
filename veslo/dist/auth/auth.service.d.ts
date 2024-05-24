import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';
import { Roles } from '@prisma/client';
export declare class AuthService {
    private usersService;
    private passwordService;
    private jwtService;
    constructor(usersService: UsersService, passwordService: PasswordService, jwtService: JwtService);
    signIn(login: string, password: string): Promise<{
        accessToken: string;
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            hash: string;
            salt: string;
            login: string;
            avatar: string | null;
            role: import(".prisma/client").$Enums.Roles;
        };
    }>;
    signUp(login: string, name: string, role: Roles, password: string): Promise<{
        accessToken: string;
    }>;
}
