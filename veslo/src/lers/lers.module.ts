import { Module } from '@nestjs/common';
import { LersController } from './lers.controller';
import { LersService } from './lers.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [LersController],
  providers: [LersService],
})
export class LersModule {}
