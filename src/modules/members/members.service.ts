import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private readonly prisma: PrismaService) { }

  async create(dto: CreateMemberDto) {
    return await this.prisma.member.create({ data: dto });
  }

  async findAll() {
    return await this.prisma.member.findMany({
      include: {
        project: true,
        user: true,
      }
    })
  }

  async findOne(id: string) {
    return await this.prisma.member.findUnique({
      where: {id},
      include: {
        project: true,
        user: true,
      }
    })
  }

  async update(id: string, dto: UpdateMemberDto) {
    return await this.prisma.member.update({
      where: {id},
      data: dto, 
    })
  }

  async remove(id: string) {
    return await this.prisma.member.delete({
      where: {id},
    })
  }
}
