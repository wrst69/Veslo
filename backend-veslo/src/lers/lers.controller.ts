import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { LersService } from './lers.service';

@Controller('lers')
export class LersController {
  constructor(private lersService: LersService) {}

  @UseInterceptors(CacheInterceptor)
  @Get()
  getData() {
    return this.lersService.getData();
  }

  @Get('nodes')
  getLersNodes() {
    return this.lersService.getLersNodes();
  }
}
