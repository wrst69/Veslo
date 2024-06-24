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

  async createNotifications(dto: CreateNotificationDto) {
    const { recipients, ...data} = dto;

    recipients.map(async (recipient) => await this.db.notification.create ({ data: { recipientId: recipient.id, ...data } }));
  }

  async setIsRead(id: number) {
    await this.db.notification.update({ where: { id }, data: { isRead: true }});
  }

  async setAllNotificationsIsRead(id: number) {
    await this.db.notification.updateMany({ where: {recipientId: id}, data: { isRead: true } })
  }
  async deleteNotification(id: number) {
    await this.db.notification.delete({ where: { id} })
  }

}
