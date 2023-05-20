import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/core/enum/Role';

export class UserCrearteDTO {
  @ApiProperty({ required: false })
  id?: string;
  @ApiProperty({ required: true })
  userName: string;
  @ApiProperty({ required: false })
  lastName: string;
  @ApiProperty({ required: true })
  email: string;
  @ApiProperty({ required: true })
  password: string;
  @ApiProperty({ enum: Role, default: Role.User })
  rolType: Role;
}
