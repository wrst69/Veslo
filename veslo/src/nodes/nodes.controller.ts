import { Controller, Patch, Post } from '@nestjs/common';
import { NodesService } from './nodes.service';

@Controller('nodes')
export class NodesController {
    constructor(private nodesService: NodesService) {}

    @Post()
    createNode() {}

    @Patch()
    updateNode() {}
}
