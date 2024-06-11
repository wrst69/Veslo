import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Injectable()
export class CookieService {
  constructor(private configService: ConfigService) {}
  static tokenKey = 'access-token';

  setToken(res: Response, token: string) {
    res.cookie(CookieService.tokenKey, token, {
      httpOnly: true,
      maxAge: 900000 * 4, //1h in ms
      sameSite: this.configService.get('COOKIE_SAMESITE_OPTION'),
      secure: false,

      /* // true if production
      secure: true,
      // lax if production
      sameSite: 'none', */
    });
  }

  removeToken(res: Response) {
    res.clearCookie(CookieService.tokenKey);
  }
}
