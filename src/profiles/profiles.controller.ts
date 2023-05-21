import { Controller, Post, Body, UseGuards, Request, Put, Get, Param, BadRequestException } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { Profile } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { JwtPayload } from 'src/auth/jwt.strategy';
  
  @Controller('profiles')
  export class ProfilesController {
    constructor(
      private readonly ProfilesService: ProfilesService,
    ) {}
  
  // @UseGuardsっていうやつを使ってPOSTの前に認証
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createProfile(
    // 認証に成功したらそのログイン中のアカウントのIDを取得
    @Request() req: { user: JwtPayload },
    // アカウントIDは認証から取得できるので受け取る必要がない
    @Body() profileData: { name: string, misc?: string }
  ): Promise<Profile> {
    return this.ProfilesService.createProfile( {user:{connect:{id: req.user.id}}, name: profileData.name, misc: profileData.misc ?? '' })
  }

  @UseGuards(AuthGuard('jwt'))
  @Put()
  async updateProfile(
    @Request() req: { user: JwtPayload },
    @Body() profileData: { id: string, name: string, misc?: string }
  ): Promise<Profile> {
    return this.ProfilesService.updateProfile(req.user.id, profileData)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getProfile(
    @Param('id') id: string,
  ): Promise<Profile> {
    const profile = await this.ProfilesService.getProfile(id)
    if (!profile) {
      throw new BadRequestException
    }
    return profile
  }

}



  