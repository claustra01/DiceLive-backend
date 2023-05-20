import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { StreamsModule } from './streams/streams.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, StreamsModule, AuthModule, JwtModule],
  providers: [AuthService],
})
export class AppModule {}