import axios from 'axios'

const url = 'http://localhost:3003/orders';

class OrdersRepository {
    getOrdersList = async () => await axios.get(url).then((resp) => resp.data);

    createOrder = async (data) => await axios.post(url, data).then((resp) => resp.data);

    updateOrder = async () => {};
    
    deleteOrder = async (command: DeleteOrderListElementCommand) => {};

    /*  async getUserById(userId: UserId): Promise<UserEntity> {
    return dbClient.user.findUniqueOrThrow({
      where: {
        id: userId,
      }
    })
  }
  
  async createUser(user: UserEntity): Promise<UserEntity> {
    return await dbClient.user.create({
      data: user,
    })
  } */
}

export const ordersRepository = new OrdersRepository();