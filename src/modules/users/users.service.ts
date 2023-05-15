import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { InjectConnection } from '@nestjs/sequelize';
import { usersMapper } from 'src/core/util/usersMapper';
import { encrypting } from 'src/core/util/createCripto';
import { UserResponse } from 'src/core/interface/UserResponse';
import { UserCrearteDTO } from 'src/core/interface/DTO/UserCrearte.DTO';
import { Contenxt } from 'src/data/Context';

@Injectable()
export class UsersService {
  // context repositories
  readonly _context: Contenxt;

  constructor(
    @InjectConnection()
    private sequelize: Sequelize,
  ) {
    this._context = new Contenxt(sequelize);
  }

  async create(values: UserCrearteDTO): Promise<UserResponse> {
    const criptoPass = await encrypting(values.password);
    const newUSer = await this._context.userRepo.create({
      id: uuid().toString(),
      firstName: values.userName,
      lastName: values.lastName,
      email: values.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const auth = await this._context.authRepo.create({
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
      await this._context.userRepo.findAll({
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
    const item = await this._context.userRepo.findOne({
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

  async findOneEmail(email: string): Promise<UserResponse> {
    const item = await this._context.userRepo.findOne({
      where: {
        email,
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
    const userDelete = await this._context.userRepo.findOne({
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
