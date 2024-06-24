import { ApiProperty } from "@nestjs/swagger";
import { NotificationTypes } from "@prisma/client";
import { IsString, IsNumber, IsArray, IsObject } from "class-validator";

export class CreateNotificationDto {
  @ApiProperty()
  @IsNumber()
  orderId: number;

  @ApiProperty()
  @IsArray()
  @IsObject({each: true}) 
  recipients: { id:number} [];

  @ApiProperty()
  @IsString()
  type: NotificationTypes;
}
