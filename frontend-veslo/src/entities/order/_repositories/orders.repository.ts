import { CreateOrderDto, DeleteOrderDto } from '../_domain/dto';
import { axiosInstance } from '@/shared/api/axios';

class OrdersRepository {
    getOrdersList = async () => await axiosInstance.get('/orders').then((resp) => resp.data);

    createOrder = async (data: CreateOrderDto) => await axiosInstance.post('/orders', data).then((res) => res.data);

    updateOrder = async () => {};
    
    deleteOrder = async (data: DeleteOrderDto) => await axiosInstance.delete(`/orders/${data}`).then((res) => res.data);
}

export const ordersRepository = new OrdersRepository();