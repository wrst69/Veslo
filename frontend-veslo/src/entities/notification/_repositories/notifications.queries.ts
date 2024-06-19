import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { notificationsRepository } from './notifications.repository';
import { SetNotificationIsReadDto } from '../_domain/dto';


const notificationsKey = ['notifications'];

export const useNotificationsQuery = () => {
  return useQuery({
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
  })
}