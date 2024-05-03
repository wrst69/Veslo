import { Response } from 'express';
export declare class CookieService {
    static tokenKey: string;
    setToken(res: Response, token: string): void;
    removeToken(res: Response): void;
}
