import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserCrearteDTO } from '../../core/interface/DTO/UserCrearte.DTO';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('v1/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
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
