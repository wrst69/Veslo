import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { LersService } from './lers.service';

@UseInterceptors(CacheInterceptor)
@Controller('lers')
export class LersController {
  constructor(private lersService: LersService) {}

  @Get()
  getNodes() {
    return this.lersService.getNodes();
  }
}
