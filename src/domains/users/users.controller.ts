import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserCrearteDTO } from 'src/core/interface/DTO/UserCrearte.DTO';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { Roles } from 'src/core/util/roles.decorator';
import { Role } from 'src/core/enum/Role';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { Auth } from 'src/core/decorators/auth.decorator';

@ApiTags('users')
@Controller('v1/users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
  @Auth(Role.Admin)
  async create(@Body() data: UserCrearteDTO) {
    try {
      return await this.userService.create(data);
    } catch (error) {
      return {
        name: error?.name,
        error: error?.errors,
      };
    }
  }

  @Get()
  @Auth(Role.Admin, Role.User)
  async findAll() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      return {
        isError: true,
        name: error?.name,
        error: error?.errors,
      };
    }
  }

  @Get(':id')
  @Auth(Role.Admin, Role.User)
  async findId(@Param('id') id: string) {
    try {
      return await this.userService.findOne(id);
    } catch (error) {
      return {
        isError: true,
        name: error?.name,
        error: error?.errors,
      };
    }
  }

  @Delete(':id')
  @Auth(Role.Admin)
  async deleteId(@Param('id') id: string) {
    try {
      await this.userService.remove(id);
      return {
        isError: false,
        message: `delete complete: ${id}`,
      };
    } catch (error) {
      return {
        isError: true,
        name: error?.name,
        error: error?.errors,
      };
    }
  }
}
