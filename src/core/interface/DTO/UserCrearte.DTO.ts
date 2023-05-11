import { ApiProperty } from '@nestjs/swagger';

export class UserCrearteDTO {
  @ApiProperty({ required: true })
  id?: string;
  @ApiProperty({ required: true })
  userName: string;
  @ApiProperty({ required: false })
  lastName: string;
  @ApiProperty({ required: true })
  email: string;
  @ApiProperty({ required: true })
  password: string;
}
