import { axiosInstance } from '@/shared/api/axios';

class NodesRepository {
    getLersNodesList = async () => await axiosInstance.get('/lers').then((resp) => resp.data);
}

export const nodesRepository = new NodesRepository();
