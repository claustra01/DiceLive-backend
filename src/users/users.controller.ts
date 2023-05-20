import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async createUser(
    @Body() userData: {
      email: string,
      password: string,
      verify: boolean
    },
  ): Promise<User> {
    userData.verify = true
    return this.usersService.createUser(userData);
  }

}