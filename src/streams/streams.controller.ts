import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { StreamsService } from './streams.service';
import { Stream, User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtPayload } from 'src/auth/jwt.strategy';

@Controller('streams')
export class StreamsController {
    constructor(
        private readonly streamsService: StreamsService,
        private readonly usersService: UsersService
    ) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getStream(): Promise<Stream[]> {
        return this.streamsService.getStream();
    }

    // @UseGuardsっていうやつを使ってPOSTの前に認証
    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createStream(
        // 認証に成功したらそのログイン中のアカウントのIDを取得
        @Request() req: { user: JwtPayload },
        // OwnerIDは認証から取得できるので受け取る必要がない
        // titleパラメータを追加しました
        @Body() streamData: { url: string, title: string, misc?: string },
    ): Promise<Stream> {
        // ここにもtitleを追加
        return await this.streamsService.createStream({ url: streamData.url, title: streamData.title, misc:streamData.misc, owner: {connect:{id: req.user.id}} });
    }
}
