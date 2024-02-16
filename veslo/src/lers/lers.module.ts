import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { HttpModule } from '@nestjs/axios';
import { redisStore } from 'cache-manager-redis-yet';
import { LersController } from './lers.controller';
import { LersService } from './lers.service';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      isGlobal: true,
      ttl: 21600 * 10000,
      store: redisStore,
    }),
  ],
  controllers: [LersController],
  providers: [LersService],
})
export class LersModule {}
