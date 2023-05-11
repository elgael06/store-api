import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Auth } from 'src/database/models/auth.entity';
import { usersMapper } from 'src/core/util/usersMapper';
import { encrypting } from 'src/core/util/createCripto';
import { Users } from 'src/database/models/users.entity';
import { Repository, Sequelize } from 'sequelize-typescript';
import { UserResponse } from 'src/core/interface/UserResponse';
import { UserCrearteDTO } from 'src/core/interface/DTO/UserCrearte.DTO';

@Injectable()
export class UsersService {
  // repositories
  repoUser: Repository<Users>;
  repoAuth: Repository<Auth>;

  constructor(
    @InjectConnection()
    private sequelize: Sequelize,
  ) {
    this.repoUser = this.sequelize.getRepository(Users);
    this.repoAuth = this.sequelize.getRepository(Auth);
  }

  async create(values: UserCrearteDTO): Promise<UserResponse> {
    const criptoPass = await encrypting(values.password);
    const newUSer = await this.repoUser.create({
      id: uuid().toString(),
      firstName: values.userName,
      lastName: values.lastName,
      email: values.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const auth = await this.repoAuth.create({
      id: uuid().toString(),
      idUser: newUSer.id,
      password: criptoPass,
      rolType: values.rolType,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return usersMapper({
      ...values,
      id: newUSer.id,
      email: values.email,
      isActive: newUSer.isActive,
      rolType: auth.rolType,
      createdAt: newUSer.createdAt,
      updateAt: newUSer.updatedAt,
    });
  }

  async findAll(): Promise<UserResponse[]> {
    return (
      await this.repoUser.findAll({
        include: [{ all: true, nested: true }],
        mapToModel: true,
      })
    ).map((item) => {
      const rolType = item.auth.rolType;
      return usersMapper({
        id: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
        isActive: item.isActive,
        rolType: rolType,
        updateAt: item.updatedAt,
        createdAt: item.createdAt,
      });
    });
  }

  async findOne(id: string): Promise<UserResponse> {
    const item = await this.repoUser.findOne({
      where: {
        id,
      },
      include: [{ all: true, nested: true }],
      mapToModel: true,
    });
    const rolType = item.auth.rolType;

    return usersMapper({
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      isActive: item.isActive,
      rolType: rolType,
      updateAt: item.updatedAt,
      createdAt: item.createdAt,
    });
  }

  async remove(id: string): Promise<void> {
    const userDelete = await this.repoUser.findOne({
      where: {
        id,
      },
      include: [{ all: true, nested: true }],
      mapToModel: true,
    });
    await userDelete.auth.destroy();
    await userDelete.destroy();
  }
}
