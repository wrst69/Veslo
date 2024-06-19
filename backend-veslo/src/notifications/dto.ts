import { ApiProperty } from "@nestjs/swagger";
import { NotificationTypes } from "@prisma/client";
import { IsString, IsNumber } from "class-validator";

export class CreateNotificationDto {
  @ApiProperty()
  @IsString()
  type: NotificationTypes;

  @ApiProperty()
  @IsNumber()
  orderId: number;

  @ApiProperty()
  @IsNumber()
  recipientId: number;
}
