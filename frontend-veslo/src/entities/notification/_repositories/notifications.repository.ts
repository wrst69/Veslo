import { axiosInstance } from '@/shared/api/axios';
import { SetNotificationIsReadDto } from '../_domain/dto';

class NotificationsRepository {
    getNotifications = async () => await axiosInstance.get('/notifications').then((res) => res.data);

    setNotificationIsRead = async (data: SetNotificationIsReadDto) => await axiosInstance.post('/notifications', data).then((res) => res.data);
}

export const notificationsRepository = new NotificationsRepository();
