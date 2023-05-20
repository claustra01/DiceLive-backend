import * as bcrypt from 'bcrypt';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUser(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id }
    });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email }
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const user = await this.getUserByEmail(data.email)
    if (user) {
      throw new BadRequestException;
    }

    const hash = await bcrypt.hash(data.password, 10)
    data.password = hash
    return this.prisma.user.create({
      data,
    });
  }
  
}
