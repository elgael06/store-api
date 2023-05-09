import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  UserLoginDTO,
  UserSingDTO,
} from 'src/core/interface/DTO/UserSesion.DTO';
import { IserviceResponce } from 'src/core/interface/ServiceResponce.interface';

@ApiTags('auth')
@Controller('v1/auth')
export class AuthController {
  @Post('/sing')
  create(@Body() data: UserSingDTO): IserviceResponce<UserSingDTO> {
    return {
      message: 'Autenticacion creada con exito.',
      status: true,
      isError: false,
      data,
    };
  }

  @Post('/login')
  login(@Body() data: UserLoginDTO): IserviceResponce<UserLoginDTO> {
    return {
      message: 'Autenticacion exitosa.',
      status: true,
      isError: false,
      data,
    };
  }
}
