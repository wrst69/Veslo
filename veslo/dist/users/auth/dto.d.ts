import { Role } from '@prisma/client';
export declare class SignUpBodyDto {
    login: string;
    name: string;
    role: Role;
    password: string;
}
export declare class SignInBodyDto {
    login: string;
    password: string;
}
export declare class getSessionInfoDto {
    id: number;
    login: string;
    ist: number;
    exp: number;
}
