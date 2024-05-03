import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';
import { Role } from '@prisma/client';
export declare class AuthService {
    private usersService;
    private passwordService;
    private jwtService;
    constructor(usersService: UsersService, passwordService: PasswordService, jwtService: JwtService);
    signIn(login: string, password: string): Promise<{
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
    signUp(login: string, name: string, role: Role, password: string): Promise<{
        accessToken: string;
    }>;
}
