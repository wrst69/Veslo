import { Response } from 'express';
import { AuthTestService } from './auth-test.service';
import { SignInBodyDto, SignUpBodyDto, GetSessionInfoDto } from './dto';
import { CookieService } from './cookie.service';
import { UserTestService } from '../users-test/users-test.service';
export declare class AuthTestController {
    private authService;
    private cookieService;
    private usersService;
    constructor(authService: AuthTestService, cookieService: CookieService, usersService: UserTestService);
    signUp(body: SignUpBodyDto, res: Response): Promise<void>;
    signIn(body: SignInBodyDto, res: Response): Promise<void>;
    signOut(res: Response): void;
    getSessionInfo(session: GetSessionInfoDto): GetSessionInfoDto;
}
