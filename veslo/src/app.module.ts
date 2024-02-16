import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { LersModule } from './lers/lers.module';
import { AuthModule } from './users/auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [DbModule, LersModule, AuthModule, UsersModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
