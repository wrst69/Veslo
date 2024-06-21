import { axiosInstance } from '@/shared/api/axios';

class UsersRepository {
    getUsersList = async () => await axiosInstance.get('/users').then((res) => res.data);
}

export const usersRepository = new UsersRepository();
