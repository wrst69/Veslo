import { Response } from 'express';
import { AuthService } from './auth.service';
import { SignInBodyDto, SignUpBodyDto } from './dto';
import { CookieService } from './cookie.service';
import { UsersService } from '../users.service';
export declare class AuthController {
    private authService;
    private cookieService;
    private usersService;
    constructor(authService: AuthService, cookieService: CookieService, usersService: UsersService);
    signIn(dto: SignInBodyDto, res: Response): Promise<{
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
    signUp(body: SignUpBodyDto, res: Response): Promise<void>;
    signOut(res: Response): void;
    getProfile(id: number): Promise<{
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
