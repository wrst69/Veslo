import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const SessionInfo = createParamDecorator(
  (_, ctxc: ExecutionContext) => ctxc.switchToHttp().getRequest().session,
);
