import { 
    Controller,
    Post,
    Body,
 } from '@nestjs/common';
 import { StreamsService } from './streams.service';
 import { Stream } from '@prisma/client';
 import { UsersService } from 'src/users/users.service';

@Controller('streams')
export class StreamsController {
    constructor(
        private readonly streamsService: StreamsService,
        private readonly usersService: UsersService
    ) {}

    @Post()
    async createStream(
        @Body() streamData: { ownerId: string, url: string, misc?: string},
    ): Promise<Stream> {
        console.log(streamData)
        // this.usersService.getUser(streamData.ownerId)
        return await this.streamsService.createStream({  url:streamData.url, misc:streamData.misc,owner: {connect:{id:streamData.ownerId}} });
    }
}
