import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Post,
  Body,
  Res,
  UseGuards,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';

import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { SignInBodyDto, SignUpBodyDto, getSessionInfoDto } from './dto';
import { CookieService } from './cookie.service';
import { AuthGuard } from './guards/auth????.guard';
import { SessionInfo } from './session-info.decorator';
import { CurrentUser } from './decorators/user.decorator';
import { UsersService } from '../users.service';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private usersService: UsersService,
  ) {}

  /* @Post('sign-in')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  async signIn(
    @Body() body: SignInBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signIn(
      body.login,
      body.password,
    );

    this.cookieService.setToken(res, accessToken);

    return accessToken;
  } */

  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  async signIn(
    @Body() dto: SignInBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { refreshToken, ...response } = await this.authService.signIn(dto);

    this.authService.addRefreshTokenToResponse(res, refreshToken);

    return response;
  }

  @Post('sign-up')
  @ApiCreatedResponse()
  async signUp(
    @Body() body: SignUpBodyDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken } = await this.authService.signUp(
      body.login,
      body.name,
      body.role,
      body.password,
    );

    this.cookieService.setToken(res, accessToken);
  }

  @Post('sign-out')
  @ApiOkResponse()
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  signOut(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res);
  }

  @Auth()
  @Get('profile')
  async getProfile(@CurrentUser('id') id: number) {
    return this.usersService.findById(id);
  }

  /* @Get('session')
  @ApiOkResponse({
    type: getSessionInfoDto,
  })
  @UseGuards(AuthGuard)
  getSessionInfo(@SessionInfo() session: getSessionInfoDto) {
    return session;
  } */
}
