import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateCommentDto) {
    return await this.prisma.comment.create({ data: dto });
  }

  async findAll() {
    return await this.prisma.comment.findMany({
      include: {
        task: true,
        user: true,
      }
    })
  }

  async findOne(id: string) {
    return await this.prisma.comment.findUnique({
      where: { id },
      include: {
        task: true,
        user: true,
      },
    });
  }

  async update(id: string, dto: UpdateCommentDto) {
    return await this.prisma.comment.update({
      where: { id },
      data: dto
    });
  }

  async remove(id: string) {
    return await this.prisma.comment.delete({ where: { id } });
  }
}
