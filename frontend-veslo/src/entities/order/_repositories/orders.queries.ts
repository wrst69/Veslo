import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ordersRepository } from './orders.repository';
import { CreateOrderDto, DeleteOrderDto } from '../_domain/dto';
import { UserId } from '@/entities/user/_domain/types';

const ordersKey = ['orders'];
const recipientOrdersKey = ['recipientOrders'];

export const useOrdersQuery = () => {
  return useQuery({
    queryKey: ordersKey,
    queryFn: () => ordersRepository.getOrdersList()
  });
};

export const useRecipientOrdersQuery = (id: UserId) => {
  return useQuery({
    queryKey: recipientOrdersKey,
    queryFn: () => ordersRepository.getRecipientOrders(id)
  });
};

export const useCreateOrderMutation = () =>  {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateOrderDto) => ordersRepository.createOrder(data),
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ordersKey });
      await queryClient.invalidateQueries({ queryKey: recipientOrdersKey });
    }
  })
};

export const useUpdateOrderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => ordersRepository.updateOrder(data),
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ordersKey });
      await queryClient.invalidateQueries({ queryKey: recipientOrdersKey });
    }
  })
};

export const useDeleteOrderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DeleteOrderDto) => ordersRepository.deleteOrder(data),
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: ordersKey });
      await queryClient.invalidateQueries({ queryKey: recipientOrdersKey });
    }
  })
};
