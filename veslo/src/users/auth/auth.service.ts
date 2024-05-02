import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';
import { Role } from '@prisma/client';
import { SignInBodyDto } from './dto';

@Injectable()
export class AuthService {
  EXPIRE_DAY_REFRESH_TOKEN = 1;
  REFRESH_TOKEN_NAME = 'refreshToken';

  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async signUp(login: string, name: string, role: Role, password: string) {
    const user = await this.usersService.findByLogin(login);

    if (user) {
      throw new BadRequestException({ type: 'login-exists' });
    }

    const salt = this.passwordService.getSalt();
    const hash = this.passwordService.getHash(password, salt);

    const newUser = await this.usersService.create(
      login,
      name,
      role,
      hash,
      salt,
    );

    const accessToken = await this.jwtService.signAsync({
      id: newUser.id,
      login: newUser.login,
    });

    return { accessToken };
  }

  async signIn(dto: SignInBodyDto) {
    const user = await this.usersService.findByLogin(dto.login);

    if (!user) {
      throw new UnauthorizedException('Credentials is invalid');
    }

    const hash = this.passwordService.getHash(dto.password, user.salt);

    if (hash !== user.hash) {
      throw new UnauthorizedException('Credentials is invalid');
    }

    const tokens = await this.issueTokens(user.id, user.role);

    return {
      user,
      ...tokens,
    };
  }

  async getNewTokens(refreshToken: string) {
    const result = await this.jwtService.verifyAsync(refreshToken);

    if (!result) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    //const { password, ...user } = await this.usersService.findById(result.id);

    const user = await this.usersService.findById(result.id);

    if (!user) {
      throw new UnauthorizedException('User does not exists');
    }

    const tokens = await this.issueTokens(user.id, user.role);

    return {
      user,
      ...tokens,
    };
  }

  private async issueTokens(userId: number, role?: Role) {
    const data = { id: userId, role };

    const accessToken = this.jwtService.sign(data, {
      expiresIn: '1m',
    });

    const refreshToken = this.jwtService.sign(data, {
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  addRefreshTokenToResponse(res: Response, refreshToken: string) {
    const expiresIn = new Date();
    expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN);

    res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
      httpOnly: true,
      domain: 'localhost',
      expires: expiresIn,
      // true if production
      secure: true,
      // lax if production
      sameSite: 'none',
    });
  }

  removeRefreshTokenFromResponse(res: Response) {
    res.cookie(this.REFRESH_TOKEN_NAME, '', {
      httpOnly: true,
      domain: 'localhost',
      expires: new Date(0),
      // true if production
      secure: true,
      // lax if production
      sameSite: 'none',
    });
  }
}
