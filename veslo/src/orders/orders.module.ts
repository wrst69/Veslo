import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { DbModule } from 'src/db/db.module';
import { NodesModule } from 'src/nodes/nodes.module';
import { NodesService } from 'src/nodes/nodes.service';

@Module({
  imports: [DbModule, NodesModule],
  controllers: [OrdersController],
  providers: [OrdersService, NodesService],
})
export class OrdersModule {}
