import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';
import { Roles } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async signIn(login: string, password: string) {
    const user = await this.usersService.findByLogin(login);

    if (!user) {
      throw new UnauthorizedException();
    }

    const hash = this.passwordService.getHash(password, user.salt);

    if (hash !== user.hash) {
      throw new UnauthorizedException();
    }

    const accessToken = await this.jwtService.signAsync({
      id: user.id,
      login: user.login,
      name: user.name,
      role: user.role
    });

    return { accessToken, user };
  }

  async signUp(login: string, name: string, role: Roles, password: string) {
    const user = await this.usersService.findByLogin(login);

    if (user) {
      throw new BadRequestException({ type: 'email-exists' });
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
      name: newUser.name,
      role: newUser.role
    });

    return { accessToken };
  }
}
