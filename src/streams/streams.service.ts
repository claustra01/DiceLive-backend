import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Stream, Prisma } from '@prisma/client';

@Injectable()
export class StreamsService {
    constructor(private prisma: PrismaService) {}

    async getStreamByUrl(url: string): Promise<Stream | null> {
      return this.prisma.stream.findUnique({
        where: { url }
      });
    }

    async createStream (data: Prisma.StreamCreateInput): Promise<Stream> {
        const stream = await this.getStreamByUrl(data.url);
        if (stream) {
          throw new BadRequestException;
        }

        return await this.prisma.stream.create({
          data
        });
    }

}
