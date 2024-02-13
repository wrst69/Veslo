import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from 'types/user-role.enum';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'FedorovAY',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'viewer',
  })
  @IsNotEmpty()
  @IsString()
  role: UserRole;

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
  name: string;

  @ApiProperty({
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class getSessionInfoDto {
  @ApiProperty({
    example: '1',
  })
  id: number;

  @ApiProperty({
    example: 'FedorovAY',
  })
  name: string;

  @ApiProperty()
  ist: number;

  @ApiProperty()
  exp: number;
}
