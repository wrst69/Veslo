import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class CookieService {
  static tokenKey = 'access-token';

  setToken(res: Response, token: string) {
    res.cookie(CookieService.tokenKey, token, {
      httpOnly: true,
      maxAge: 900000, //15m in ms
    });
  }

  removeToken(res: Response) {
    res.clearCookie(CookieService.tokenKey);
  }
}
