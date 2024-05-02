import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { SessionInfo } from 'src/users/auth/session-info.decorator';
import { getSessionInfoDto } from 'src/users/auth/dto';
import { UsersService } from './users.service';

@Controller('users')
//@UseGuards(AuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUserByLogin(login: string) {
    return this.usersService.findByLogin(login);
  }
}
