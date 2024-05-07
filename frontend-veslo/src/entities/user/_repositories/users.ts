import axios from 'axios'

const url = 'http://localhost:3003/users';

class UsersRepository {
    /* getOrdersList = async () => await axios.get(url).then((resp) => resp.data);

    createOrder = async (data) => await axios.post(url, data).then((resp) => resp.data);

    updateOrder = async () => {};
    
    deleteOrder = async (command: DeleteOrderListElementCommand) => {}; */

    getUserByLogin = async (login: string) => await axios.get(url, {data: login}).then((resp) => resp.data);
}

export const usersRepository = new UsersRepository();