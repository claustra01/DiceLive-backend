import {
    Controller,
    Get,
    Param,
    Post,
    Body,
  } from '@nestjs/common';
  import { ProfilesService } from './profiles.service';
  import { Profile } from '@prisma/client';
  
  @Controller('profiles')
  export class ProfilesController {
    constructor(
      private readonly ProfilesService: ProfilesService,
    ) {}
  
    @Get(':id')
    async findProfileById(
    @Param('id') id: string,
    ): Promise<Profile> {
      return this.ProfilesService.profile(id);
    }
  
    // @Get()
    // async profiles(): Promise<Profile[]> {
    //   return this.ProfilesService.profile();
    // }
  
   @Post()
   async createProfile(
    @Body() profileData: { userId: string, name: string, misc?: string }
   ): Promise<Profile> {
    return this.ProfilesService.createProfile( {user:{connect:{id:profileData.userId}}, name: profileData.name, misc: profileData.misc ?? '' })
   }
  }



  