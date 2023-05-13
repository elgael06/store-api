import {
  Column,
  Model,
  Table,
  IsUUID,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { Users } from './users.entity';
import { Role } from 'src/core/enum/Role';

@Table
export class Auth extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column({ allowNull: true })
  rolType: Role;

  @ForeignKey(() => Users)
  idUser: string;

  @Column
  password: string;
}
