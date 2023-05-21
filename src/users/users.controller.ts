import { Controller, Get, Post, Body, UseGuards, Param, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { throws } from 'assert';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async createUser(
    @Body() userData: { email: string, password: string, verified: boolean }
  ): Promise<User> {
    userData.verified = true
    return this.usersService.createUser(userData);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getUser(
    @Param('id') id: string,
  ): Promise<User> {
    const user = await this.usersService.getUser(id)
    if (!user) {
      throw new BadRequestException
    }
    return user
  }

}