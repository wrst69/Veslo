import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @Get()
  @UseGuards(AuthGuard)
  getNotifications(@SessionInfo() session: GetSessionInfoDto) {
    return this.notificationsService.getNotificationsById(session.id)
  }
}
