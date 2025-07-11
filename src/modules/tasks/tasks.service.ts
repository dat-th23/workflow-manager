import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTaskDto) {
    // kiểm tra project có tồn tại kh

    return await this.prisma.task.create({
      data: dto,
    });
  }

  async findAll() {
    return await this.prisma.task.findMany({
      include: {
        project: true,
        assignees: true,
        comments: true,
      },
    });
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: {
        project: true,
        assignees: true,
        comments: true,
      },
    });

    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async update(id: string, dto: UpdateTaskDto) {
    return await this.prisma.task.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return await this.prisma.task.delete({
      where: { id },
    });
  }
}
