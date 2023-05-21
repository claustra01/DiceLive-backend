import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Stream, Prisma } from '@prisma/client';

@Injectable()
export class StreamsService {
    constructor(private prisma: PrismaService) {}

    async getStreamByUrl(url: string): Promise<Stream | null> {
      console.log(url);
      return await this.prisma.stream.findUnique({
        where: { url }
      });
    }

    async getStreams (): Promise<Stream[]> {
      return await this.prisma.stream.findMany();
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

    async getStream (id: string): Promise<Stream> {
      return await this.prisma.stream.findUnique({
        where: { id }
      });
    }
    
    async updateStream (ownerId: string, streamData: {id: string; title: string; misc?: string;}): Promise<Stream> {
      const oldstream = await this.getStream(streamData.id);
      if (!oldstream || oldstream.ownerId != ownerId) {
        throw new BadRequestException;
      }
      console.log(ownerId);
      console.log(streamData)
      return this.prisma.stream.update({
       where: { id: streamData.id},
       data: { title: streamData.title, misc: streamData.misc}
    }) 
  }
}
