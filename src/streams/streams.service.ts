import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Stream, Prisma} from '@prisma/client';

@Injectable()
export class StreamsService {
    constructor(private prisma: PrismaService) {}

    async createStream (data: Prisma.StreamCreateInput): Promise<Stream> {
        return await this.prisma.stream.create({
          data
        });
    }

}
