import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { StreamsModule } from './streams/streams.module';

@Module({
  imports: [UsersModule, StreamsModule],
})
export class AppModule {}