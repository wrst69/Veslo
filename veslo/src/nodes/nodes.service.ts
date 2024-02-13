import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class NodesService {
    constructor(private db: DbService) {}

    async createNode( dto) {
        return await this.db.node.create(dto)
    }

    async updateNode() {

    }
}
