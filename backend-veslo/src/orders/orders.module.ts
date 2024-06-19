import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { DbModule } from 'src/db/db.module';
import { NodesModule } from 'src/nodes/nodes.module';
import { NodesService } from 'src/nodes/nodes.service';
import { NotificationsModule } from 'src/notifications/notifications.module';
import { NotificationsService } from 'src/notifications/notifications.service';

@Module({
  imports: [DbModule, NodesModule, NotificationsModule],
  controllers: [OrdersController],
  providers: [OrdersService, NodesService, NotificationsService],
})
export class OrdersModule {}
