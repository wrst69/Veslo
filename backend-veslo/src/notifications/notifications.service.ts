import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateNotificationDto } from './dto';

@Injectable()
export class NotificationsService {
  constructor(private db: DbService) {}

  async getNotificationsById(id: number) {
    return await this.db.notification.findMany({ 
      where: {recipientId: id},
      orderBy: { createdAt: 'desc' }
    })
  }

  async createNotification(dto: CreateNotificationDto) {
    return this.db.notification.create({ data: { ...dto } })
  }
}
