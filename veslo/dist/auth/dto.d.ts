import { Roles } from '@prisma/client';
export declare class SignUpBodyDto {
    login: string;
    name: string;
    role: Roles;
    password: string;
}
export declare class SignInBodyDto {
    login: string;
    password: string;
}
export declare class GetSessionInfoDto {
    id: number;
    login: string;
    ist: number;
    exp: number;
}
