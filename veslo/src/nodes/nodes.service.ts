import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateMeasurePointDto, CreateNodeDto } from './dto';

@Injectable()
export class NodesService {
  constructor(private db: DbService) {}

  async checkNodeExist(id: number) {
    return await this.db.node.findFirst({
      where: { lersId: id },
    });
  }

  async createNode(dto: CreateNodeDto) {
    return await this.db.node.create({
      data: { ...dto },
    });
  }

  async checkMeasurePointExist(id: number) {
    return await this.db.measurePoint.findFirst({
      where: { lersId: id },
    });
  }

  async createMeasurePoint(dto: CreateMeasurePointDto) {
    return await this.db.measurePoint.create({
      data: { ...dto },
    });
  }
}
