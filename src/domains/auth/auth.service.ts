import { JwtService } from '@nestjs/jwt';
import { Contenxt } from 'src/data/Context';
import { Sequelize } from 'sequelize-typescript';
import { checkEncripting } from 'src/core/util/createCripto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccessTokenDTO } from 'src/core/interface/DTO/AccessToken.out';

@Injectable()
export class AuthService {
  // context repositories
  readonly _context: Contenxt;

  constructor(private sequelize: Sequelize, private jwtService: JwtService) {
    this._context = new Contenxt(sequelize);
  }

  async singIn(userEmail: string, password: string): Promise<AccessTokenDTO> {
    const user = await this._context.userRepo.findOne({
      where: { email: userEmail, isActive: true },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    const auth = await this._context.authRepo.findOne({
      where: { idUser: user.id },
    });
    const encriptPass = await checkEncripting(password, auth.password);
    if (!encriptPass) {
      throw new UnauthorizedException();
    }
    const payload = {
      username: user.firstName,
      sub: user.id,
      type: auth.rolType,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
