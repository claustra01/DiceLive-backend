import { Module } from '@nestjs/common';
import { ProfileModule } from './profiles/profiles.module';

@Module({
  imports: [ProfileModule],
})
export class AppModule {}