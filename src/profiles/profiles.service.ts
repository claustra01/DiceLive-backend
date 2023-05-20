import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Profile, Prisma } from '@prisma/client';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  async profile(
    id: string,
  ): Promise<Profile | null> {
    return this.prisma.profile.findUnique({
      where: { id }
    });
  }

  async profiles(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async createProfile(data: Prisma.ProfileCreateInput): Promise<Profile> {
    return this.prisma.profile.create({
      data,
    });
  }
}
