import { ApiProperty } from '@nestjs/swagger';
import { OrderStatuses, OrderTypes } from '@prisma/client';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsNumber()
  nodeLersId: number;

  @ApiProperty()
  @IsString()
  nodeTitle: string;

  @ApiProperty()
  @IsNumber()
  measurePointLersId: number;

  @ApiProperty()
  @IsString()
  measurePointTitle: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  type: OrderTypes;

  @ApiProperty()
  @IsArray()
  @IsNumber({},{each: true}) 
  recipients: number[];
}

export class UpdateOrderDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  type: OrderTypes;

  @ApiProperty()
  @IsString()
  @IsOptional()
  status: OrderStatuses;
}
