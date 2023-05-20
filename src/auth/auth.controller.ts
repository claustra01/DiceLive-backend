import { Controller, UseGuards, Post, Get, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  login(@Request() req: { user: User }) {
    console.log(req.user)
    return this.authService.sign(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/test')
  status() {
    return true;
  }
  
}