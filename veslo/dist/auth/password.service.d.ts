export declare class PasswordService {
    getSalt(): string;
    getHash(password: string, salt: string): string;
}
