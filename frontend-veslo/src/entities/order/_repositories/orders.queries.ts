import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ordersRepository } from './orders.repository';
import { CreateOrderDto, DeleteOrderDto } from '../_domain/dto';
import { notificationsKey } from '@/entities/notification/_repositories/notifications.queries';

export const ordersKey = ['orders'];

export const useOrdersQuery = () => {
  return useQuery({
    queryKey: ordersKey,
    queryFn: () => ordersRepository.getOrdersList()
  });
};

export const useCreateOrderMutation = () =>  {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateOrderDto) => ordersRepository.createOrder(data),
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ordersKey });
      await queryClient.invalidateQueries({ queryKey: notificationsKey });
    }
  })
};

export const useDeleteOrderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DeleteOrderDto) => ordersRepository.deleteOrder(data),
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ordersKey });
      await queryClient.invalidateQueries({ queryKey: notificationsKey });
    }
  })
};
