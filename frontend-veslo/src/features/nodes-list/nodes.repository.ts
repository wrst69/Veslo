import axios from 'axios'

const url = 'http://localhost:3003/lers';

class NodesRepository {
    getNodesList = async () => await axios.get(url).then((resp) => resp.data);
}

export const nodesRepository = new NodesRepository();
