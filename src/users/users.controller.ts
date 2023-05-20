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
      verified: boolean
    },
  ): Promise<User> {
    userData.verified = true
    return this.usersService.createUser(userData);
  }

}