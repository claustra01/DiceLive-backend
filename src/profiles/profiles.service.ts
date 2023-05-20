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

  async putProfile(data: Prisma.ProfileCreateInput): Promise<Profile> {
    const profile = await this.getProfile(data.id);

    console.log(profile)
    
    if (!profile){
      throw new BadRequestException;
    }

    

    return 
  }
}

