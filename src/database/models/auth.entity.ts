import {
  Column,
  Model,
  Table,
  IsUUID,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { Users } from './users.entity';

@Table
export class Auth extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @ForeignKey(() => Users)
  idUser: string;

  @Column
  password: string;
}
