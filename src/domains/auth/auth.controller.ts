import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserLoginDTO } from 'src/core/interface/DTO/UserSesion.DTO';
import { AuthService } from './auth.service';
import { AccessTokenDTO } from 'src/core/interface/DTO/AccessToken.out';
import { Public } from 'src/core/guards/auth.guard';

@ApiTags('auth')
@Controller('v1/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}
  @Public()
  @Post('/login')
  login(@Body() data: UserLoginDTO): Promise<AccessTokenDTO> {
    return this.service.singIn(data.email, data.password);
  }
}
