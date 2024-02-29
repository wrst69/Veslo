import { HttpService } from '@nestjs/axios';
import { Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

const LERS_URL = 'http://10.192.1.4:10000/api/v1/';

@Injectable()
export class LersService {
  constructor(
    @Inject('CACHE_MANAGER') private cacheManager: Cache,
    private httpService: HttpService,
  ) {}

  private async loginLers() {
    const account = {
      login: 'api1',
      password: '123451234512345',
      application: 'Veslo',
    };

    const token = await lastValueFrom(
      this.httpService
        .post(`${LERS_URL}Login`, account)
        .pipe(map((res) => res.data.token)),
    );

    return token;
  }

  private async getNodesFromDb() {
    const token = await this.loginLers();

    const nodeGroups = await lastValueFrom(
      this.httpService
        .get(`${LERS_URL}Core/NodeGroups`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .pipe(map((res) => res.data)),
    );

    const nodes = await lastValueFrom(
      this.httpService
        .get(`${LERS_URL}Core/Nodes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .pipe(map((res) => res.data)),
    );

    const measurePoints = await lastValueFrom(
      this.httpService
        .get(`${LERS_URL}Core/MeasurePoints`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            getEquipment: true,
          },
        })
        .pipe(map((res) => res.data)),
    );

    const equipment = await lastValueFrom(
      this.httpService
        .get(`${LERS_URL}Core/Equipment`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .pipe(map((res) => res.data)),
    );

    return { nodeGroups, nodes, measurePoints, equipment };
  }

  async getNodes() {
    return await this.getNodesFromDb();
  }
}
