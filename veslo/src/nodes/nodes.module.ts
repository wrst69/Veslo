import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { NodesService } from './nodes.service';
import { NodesController } from './nodes.controller';

@Module({
  imports: [DbModule],
  controllers: [NodesController],
  providers: [NodesService],
})
export class NodesModule {}
