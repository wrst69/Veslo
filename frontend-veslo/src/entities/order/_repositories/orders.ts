import axios from 'axios'

const url = 'http://localhost:3003/orders';

class OrdersRepository {
    getOrdersList = async () => await axios.get(url).then((resp) => resp.data);

    createOrder = async (data) => await axios.post(url, data).then((resp) => resp.data);

    updateOrder = async () => {};
    
    deleteOrder = async (command: DeleteOrderListElementCommand) => {};

    
}

export const ordersRepository = new OrdersRepository();