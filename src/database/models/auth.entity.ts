import {
  Column,
  Model,
  Table,
  BelongsTo,
  IsUUID,
  PrimaryKey,
} from 'sequelize-typescript';
import { Users } from './users.entity';

@Table
export class Auth extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  email: string;
  @Column
  password: string;

  @BelongsTo(() => Users, 'email')
  user: Users;
}
