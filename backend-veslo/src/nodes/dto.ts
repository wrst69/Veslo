import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateNodeDto {
  @ApiProperty()
  @IsNumber()
  lersId: number;

  @ApiProperty()
  @IsString()
  title: string;
}

export class CreateMeasurePointDto {
  @ApiProperty()
  @IsNumber()
  lersId: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNumber()
  nodeId: number;
}
