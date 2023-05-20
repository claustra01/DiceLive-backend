import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Profile, Prisma, User } from '@prisma/client';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  async getProfile(id: string): Promise<Profile | null> {
    return this.prisma.profile.findUnique({
      where: { id }
    });
  }

  async createProfile(data: Prisma.ProfileCreateInput): Promise<Profile> {
    return this.prisma.profile.create({
      data,
    });
  }

  async updateProfile(userId: string, profileData: { id: string; name: string; misc?: string; }): Promise<Profile> {
    const oldProfile = await this.getProfile(profileData.id);
    if (!oldProfile || oldProfile.userId != userId) {
      throw new BadRequestException;
    }

    return this.prisma.profile.update({
      where: { id: profileData.id },
      data: { name: profileData.name, misc: profileData.misc }
    })
  }

}
