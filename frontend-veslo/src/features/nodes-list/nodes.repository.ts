import axios from 'axios'

class NodesRepository {
    getNodesList = async () => {
        const url = 'http://localhost:3003/lers';

        return await axios.get(url).then((resp) => resp.data);
    };
}

export const nodesRepository = new NodesRepository();
