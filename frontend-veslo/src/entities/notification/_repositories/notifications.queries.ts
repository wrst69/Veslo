import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { notificationsRepository } from './notifications.repository';
import { DeleteNotificationDto, SetNotificationIsReadDto } from '../_domain/dto';
import { NotificationEntity } from '../_domain/types';

export const notificationsKey = ['notifications'];

export const useNotificationsQuery = () => {
  return useQuery<NotificationEntity[]>({
    queryKey: notificationsKey,
    queryFn: () => notificationsRepository.getNotifications()
  });
};

export const useSetNotificationIsReadMutation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: SetNotificationIsReadDto) => notificationsRepository.setNotificationIsRead(data),
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: notificationsKey });
    }
  });
};

export const useDeleteNotificationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DeleteNotificationDto) => notificationsRepository.deleteNotification(data),
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: notificationsKey });
    }
  });
};
