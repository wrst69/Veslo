import { CreateOrderDto, DeleteOrderDto, UpdateOrderDto } from '../_domain/dto';
import { axiosInstance } from '@/shared/api/axios';

class OrdersRepository {
    getOrdersList = async () => await axiosInstance.get('/orders').then((res) => res.data);

    createOrder = async (data: CreateOrderDto) => await axiosInstance.post('/orders', data).then((res) => res.data);

    updateOrder = async (data: UpdateOrderDto) => {};
    
    deleteOrder = async (data: DeleteOrderDto) => await axiosInstance.patch(`/orders/delete/${data}`).then((res) => res.data);
}

export const ordersRepository = new OrdersRepository();
