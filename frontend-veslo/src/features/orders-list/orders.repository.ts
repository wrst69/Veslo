import { cache } from 'react';

const orders = [
    {
        id:1,
        title: 'first',
        description: 'some description',
        isClosed: false
    },
    {
        id:2,
        title: 'second',
        description: 'some description',
        isClosed: true
    },
    {
        id:3,
        title: 'third',
        description: 'some description',
        isClosed: false
    }
]

class OrdersRepository {

    //getOrdersList = cache((): Promise<OrderListElement[]> => {} ) //обращение к БД
    getOrdersList = () => orders;

    createOrderElement = (command: CreateOrderListElementCommand) => {orders.push({
        id:4,
        title: 'third',
        description: 'some description',
        isClosed: false
    })};
    deleteOrderElement = (command: DeleteOrderListElementCommand) => {}
}

export const ordersRepository = new OrdersRepository();