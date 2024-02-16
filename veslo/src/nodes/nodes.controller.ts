import { Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/users/auth/auth.guard';
import { NodesService } from './nodes.service';

@Controller('nodes')
@UseGuards(AuthGuard)
export class NodesController {
  constructor(private nodesService: NodesService) {}

  @Post()
  createNode() {}

  @Patch()
  updateNode() {}
}
