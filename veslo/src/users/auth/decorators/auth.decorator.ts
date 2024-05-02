import { applyDecorators, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { OnlyAdminGuard } from '../guards/admin.guard';
import { OnlyUserGuard } from '../guards/user.guard';

export const Auth = (role: Role = Role.VIEWER) => {
  if (role === Role.ADMIN) {
    return applyDecorators(UseGuards(JwtAuthGuard, OnlyAdminGuard));
  }

  if (role === Role.USER) {
    return applyDecorators(UseGuards(JwtAuthGuard, OnlyUserGuard));
  }

  return applyDecorators(UseGuards(JwtAuthGuard));
};
