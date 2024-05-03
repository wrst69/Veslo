import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'FedorovAY',
  })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({
    example: 'Иванов Иван Иванович',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'viewer',
  })
  @IsNotEmpty()
  @IsString()
  role: Role;

  @ApiProperty({
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'FedorovAY',
  })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty({
    example: '1',
  })
  id: number;

  @ApiProperty({
    example: 'FedorovAY',
  })
  login: string;

  @ApiProperty()
  ist: number;

  @ApiProperty()
  exp: number;
}
