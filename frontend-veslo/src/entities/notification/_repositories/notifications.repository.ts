import { axiosInstance } from '@/shared/api/axios';
import { DeleteNotificationDto, SetAllNotificationsIsReadDto, SetNotificationIsReadDto } from '../_domain/dto';

class NotificationsRepository {
    getNotifications = async () => await axiosInstance.get('/notifications').then((res) => res.data);

    setNotificationIsRead = async (data: SetNotificationIsReadDto) => await axiosInstance.patch(`/notifications/${data}`).then((res) => res.data);

    setAllNotificationsIsRead = async (data: SetAllNotificationsIsReadDto) => await axiosInstance.patch(`/notifications/all/${data}`)

    deleteNotification = async (data: DeleteNotificationDto) => await axiosInstance.delete(`/notifications/${data}`).then((res) => res.data);
}

export const notificationsRepository = new NotificationsRepository();
