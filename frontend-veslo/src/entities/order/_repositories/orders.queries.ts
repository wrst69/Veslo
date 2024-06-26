import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ordersRepository } from './orders.repository';
import { CreateOrderDto, DeleteOrderDto, UpdateOrderDto } from '../_domain/dto';
import { notificationsKey } from '@/entities/notification/_repositories/notifications.queries';
import { OrderId } from '../_domain/types';

export const singleOrderKey = ['order'];
export const ordersKey = ['orders'];

export const useOrdersQuery = () => {
  return useQuery({
    queryKey: ordersKey,
    queryFn: () => ordersRepository.getOrdersList()
  });
};

export const useOrderByIdQuery = (data: OrderId) => {
  return useQuery({
    queryKey: singleOrderKey,
    queryFn: () => ordersRepository.getOrderById(data)
  })
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

export const useUpdateOrderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateOrderDto) => ordersRepository.updateOrder(data),
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: singleOrderKey });
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
      await queryClient.invalidateQueries({ queryKey: singleOrderKey });
      await queryClient.invalidateQueries({ queryKey: ordersKey });
      await queryClient.invalidateQueries({ queryKey: notificationsKey });
    }
  })
};
