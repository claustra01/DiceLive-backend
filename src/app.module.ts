import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController,],
  providers: [AppService],
  imports: [UserModule],
})
export class AppModule { }

