import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/database/models/users.entity';

@Injectable()
export class UsersRepositoryService {
  constructor(@InjectModel(Users) private userEntity: typeof Users) {}

  public async findById(id: number): Promise<Users> {
    const data = await this.userEntity.findOne({ where: { id } });
    return data;
  }

  public async findByEmail(email: string): Promise<Users> {
    const data = await this.userEntity.findOne({ where: { email } });
    return data;
  }

  public async create(newUser: Users): Promise<Users> {
    const data = await this.userEntity.create({ ...newUser });
    return data;
  }

  public async update(
    id: number,
    name: string,
    lastName: string,
  ): Promise<Users> {
    const data = await this.findById(id);
    data.update({
      firstName: name,
      lastName: lastName,
    });
    data.save();
    return data;
  }
}
