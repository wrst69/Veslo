import { axiosInstance } from '@/shared/api/axios';
import { DeleteNotificationDto, SetAllNotificationsIsReadDto, SetNotificationIsReadDto } from '../_domain/dto';

class NotificationsRepository {
    getNotifications = async () => await axiosInstance.get('/notifications').then((res) => res.data);

    setNotificationIsRead = async (dto: SetNotificationIsReadDto) => await axiosInstance.patch(`/notifications/${dto}`).then((res) => res.data);

    setAllNotificationsIsRead = async (dto: SetAllNotificationsIsReadDto) => await axiosInstance.patch(`/notifications/all/${dto}`)

    deleteNotification = async (dto: DeleteNotificationDto) => await axiosInstance.delete(`/notifications/${dto}`).then((res) => res.data);
}

export const notificationsRepository = new NotificationsRepository();
