import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';
import { Role } from '@prisma/client';
import { SignInBodyDto } from './dto';
export declare class AuthService {
    private usersService;
    private passwordService;
    private jwtService;
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_NAME: string;
    constructor(usersService: UsersService, passwordService: PasswordService, jwtService: JwtService);
    signUp(login: string, name: string, role: Role, password: string): Promise<{
        accessToken: string;
    }>;
    signIn(dto: SignInBodyDto): Promise<{
        accessToken: string;
        refreshToken: string;
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
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
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
    private issueTokens;
    addRefreshTokenToResponse(res: Response, refreshToken: string): void;
    removeRefreshTokenFromResponse(res: Response): void;
}
