import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

const LERS_URL = 'http//10.192.1.4:10000/api/v1/';

@Injectable()
export class LersService {
  #lersToken;

  constructor(private httpService: HttpService) {}

  async loginLers() {
    this.#lersToken = await this.httpService.get(`${LERS_URL}Login`);
    console.log(this.#lersToken);
  }

  async getNodes() {
    console.log('INSIDE SERVICE');
    const nodesData = await this.retrieveNodesFromDb();

    return nodesData;
  }

  async getNodesFromDb() {
    return this.httpService.get(`${LERS_URL}Core/Nodes`);
  }

  async retrieveNodesFromDb() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const nodes = [
          { name: 'asdad' },
          { name: 'asdascsd' },
          { name: 'asdfdfdfdfad' },
        ];
        resolve(nodes);
      }, 1000);
    });
  }
}
