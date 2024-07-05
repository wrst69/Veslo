import { IsArray, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_ORDERS_COUNT_LIMIT, DEFAULT_SORT_DIRECTION } from '../const';
import { OrderStatuses } from '@prisma/client';

export class OrdersQuery {
  /* @Transform(({ value } ) => +value || DEFAULT_ORDERS_COUNT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = DEFAULT_ORDERS_COUNT_LIMIT;

  @Transform(({ value }) => value.split(',').map((categoryId) => +categoryId))
  @IsArray({})
  @IsOptional()
  public categories?: number[];

  @IsIn(['asc', 'desc'])
  @IsOptional()
  public sortDirection: 'desc' | 'asc' = DEFAULT_SORT_DIRECTION;

  @Transform(({ value }) => +value)
  @IsOptional()
  public page: number; */

  @IsOptional()
  @IsString()
  public status: OrderStatuses | 'ALL';
}
