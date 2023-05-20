import { Module } from '@nestjs/common';
import { StreamsService } from './streams.service';
import { StreamsController } from './streams.controller';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';


@Module({
    controllers: [StreamsController,],
    providers: [StreamsService,PrismaService,UsersService]
})
export class StreamsModule {}
