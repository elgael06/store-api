import { ApiProperty } from '@nestjs/swagger';

export class UserLoginDTO {
  @ApiProperty({ name: 'email' })
  email: string;
  @ApiProperty({ name: 'password' })
  password: string;
}

export class UserSingDTO {
  @ApiProperty({ name: 'id' })
  id?: string;
  @ApiProperty({ name: 'userName' })
  userName: string;
  @ApiProperty({ name: 'email' })
  email: string;
  @ApiProperty({ name: 'password' })
  password: string;
}
