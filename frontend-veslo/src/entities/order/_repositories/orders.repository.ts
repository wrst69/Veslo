import { CreateOrderDto, DeleteOrderDto, UpdateOrderDto } from '../_domain/dto';
import { axiosInstance } from '@/shared/api/axios';
import { OrderId } from '../_domain/types';

class OrdersRepository {
    getOrdersList = async () => await axiosInstance.get('/orders').then((res) => res.data);

    getOrderById = async (dto: OrderId) => await axiosInstance.get(`/orders/${dto}`).then((res) => res.data);

    createOrder = async (dto: CreateOrderDto) => await axiosInstance.post('/orders', dto).then((res) => res.data);

    updateOrder = async (dto: UpdateOrderDto) => {
        const {id, ...data} = dto;
        await axiosInstance.patch(`/orders/${id}`, data).then((res) => res.data);
    }
    
    deleteOrder = async (dto: DeleteOrderDto) => await axiosInstance.patch(`/orders/delete/${dto}`).then((res) => res.data);
}

export const ordersRepository = new OrdersRepository();
