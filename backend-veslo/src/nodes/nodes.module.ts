import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { NodesService } from './nodes.service';

@Module({
  imports: [DbModule],
  controllers: [],
  providers: [NodesService],
})
export class NodesModule {}
