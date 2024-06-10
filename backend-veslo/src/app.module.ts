import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LersModule } from './lers/lers.module';
import { OrdersModule } from './orders/orders.module';
import { NodesModule } from './nodes/nodes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DbModule,
    AuthModule,
    UsersModule,
    LersModule,
    OrdersModule,
    NodesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
