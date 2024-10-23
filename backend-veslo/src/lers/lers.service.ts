import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fs from 'fs';

const LERS_URL = 'http://10.192.1.4:10000/api/v1/';

@Injectable()
export class LersService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
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

  private async getFilteredNodes(token) {
    const nodes = await lastValueFrom(
      this.httpService
        .get(`${LERS_URL}Core/Nodes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .pipe(map((res) => res.data)),
    );

    const filteredNodes: { id; title; address; type }[] = [];
    nodes.nodes.map((node) =>
      filteredNodes.push({
        id: node.id,
        title: node.title,
        address: node.address,
        type: node.type,
      }),
    );

    return filteredNodes;
  }

  private async getFilteredMeasurePoints(token) {
    const data = await lastValueFrom(
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

    const measurePoints = data.measurePoints.map((point) => {
      return {
        id: point.id,
        title: point.title,
        fullTitle: point.fullTitle,
        address: point.address,
        type: point.type,
        systemType: point.systemType,
        nodeId: point.nodeId,
        isDoublePipeHotWaterSystem: point.isDoublePipeHotWaterSystem,
        isTwoChannels: point.isTwoChannels,
        resourceKind: point.resourceKind,
        deviceId: point.deviceId,
      };
    });

    return measurePoints;
  }

  private async getDataFromDb() {
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

    const nodes = await this.getFilteredNodes(token);

    const measurePoints = await this.getFilteredMeasurePoints(token);

    const equipment = await lastValueFrom(
      this.httpService
        .get(`${LERS_URL}Core/Equipment`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .pipe(map((res) => res.data)),
    );
    console.log(nodes)
    return { nodeGroups, nodes, measurePoints, equipment };
  }

  async getData() {
    const dbData  = await this.getDataFromDb();

    if (dbData) {
      return dbData;
    }

    const data = fs.readFileSync('./src/lers/string_value.txt', { encoding: 'utf8', flag: 'r' });

    return JSON.parse(data);
  }
  
  async getLersNodes() {
    const token = await this.loginLers();

    const nodes = await lastValueFrom(
      this.httpService
        .get(`${LERS_URL}Core/Nodes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params:{
            nodeGroupId: 44
          }
        })
        .pipe(map((res) => res.data)),
    );

    const { nodeGroups } = await this.getDataFromDb();

    return nodes;
  }
}
