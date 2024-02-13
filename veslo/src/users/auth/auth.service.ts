import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';
import { UserRole } from 'types/user-role.enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async signUp(name: string, role: UserRole, password: string) {
    const user = await this.usersService.findByName(name);

    if (user) {
      throw new BadRequestException({ type: 'email-exists' });
    }

    const salt = this.passwordService.getSalt();
    const hash = this.passwordService.getHash(password, salt);

    const newUser = await this.usersService.create(name, role, hash, salt);

    const accesToken = await this.jwtService.signAsync({
      id: newUser.id,
      name: newUser.name,
    });

    return { accesToken };
  }

  async signIn(name: string, password: string) {
    const user = await this.usersService.findByName(name);

    if (!user) {
      throw new UnauthorizedException();
    }

    const hash = this.passwordService.getHash(password, user.salt);

    if (hash !== user.hash) {
      throw new UnauthorizedException();
    }

    const accesToken = await this.jwtService.signAsync({
      id: user.id,
      name: user.name,
    });

    return { accesToken };
  }
}
