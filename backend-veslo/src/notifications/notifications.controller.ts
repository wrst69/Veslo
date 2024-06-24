import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { NotificationsService } from './notifications.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private notificationsService: NotificationsService) {}

  @Get()
  @UseGuards(AuthGuard)
  getNotifications(
    @SessionInfo() session: GetSessionInfoDto
  ) {
    return this.notificationsService.getNotificationsById(session.id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  setNotificationIsRead(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.notificationsService.setIsRead(id);
  }

  @Patch('all/:id')
  setAllNotificationsIsRead(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.notificationsService.setAllNotificationsIsRead(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteNotification(@Param('id', ParseIntPipe) id: number) {
    return this.notificationsService.deleteNotification(id);
  }
}
