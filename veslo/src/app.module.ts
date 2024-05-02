import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { LersModule } from './lers/lers.module';
import { AuthModule } from './users/auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { isRgbColor } from 'class-validator';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
