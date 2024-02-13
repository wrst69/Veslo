import { UserRole } from 'types/user-role.enum';
export declare class SignUpBodyDto {
    name: string;
    role: UserRole;
    password: string;
}
export declare class SignInBodyDto {
    name: string;
    password: string;
}
export declare class getSessionInfoDto {
    id: number;
    name: string;
    ist: number;
    exp: number;
}
