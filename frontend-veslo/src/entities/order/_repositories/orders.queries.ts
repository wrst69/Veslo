import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ordersRepository } from './orders.repository';
import { CreateOrderDto, DeleteOrderDto, FilteredOrdersDto, UpdateOrderDto } from '../_domain/dto';
import { notificationsKey } from '@/entities/notification/_repositories/notifications.queries';
import { OrderEntity, OrderId } from '../_domain/types';

export const reportOrdersKey = ['report_orders'];
export const ordersKey = ['orders'];

export const useOrdersQuery = () => {
  return useQuery<OrderEntity[]>({
    queryKey: ordersKey,
    queryFn: () => ordersRepository.getOrdersList()
  });
};

export const useFilteredOrdersQuery = (data : FilteredOrdersDto) => {
  return useQuery<OrderEntity[]>({
    queryKey: ['report_orders', data],
    queryFn: () => ordersRepository.getFilteredOrders(data)
  })
}

export const useOrderByIdQuery = (data: OrderId) => {
  return useQuery<OrderEntity>({
    queryKey: ['orders', data],
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
