import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma.service';

const secrets = process.env.JWT_SECRET_KEY
const expires = process.env.EXPIRES

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: secrets,
      signOptions: { expiresIn: expires },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, UsersService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}