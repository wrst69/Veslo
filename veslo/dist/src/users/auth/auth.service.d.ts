import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';
import { UserRole } from 'types/user-role.enum';
export declare class AuthService {
    private usersService;
    private passwordService;
    private jwtService;
    constructor(usersService: UsersService, passwordService: PasswordService, jwtService: JwtService);
    signUp(name: string, role: UserRole, password: string): Promise<{
        accesToken: string;
    }>;
    signIn(name: string, password: string): Promise<{
        accesToken: string;
    }>;
}
