import { Injectable } from '@nestjs/common';
import { CreateTaskAssigneeDto } from './dto/create-task-assignee.dto';
import { UpdateTaskAssigneeDto } from './dto/update-task-assignee.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskAssigneesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTaskAssigneeDto) {
    return await this.prisma.taskAssignee.create({ data: dto });
  }

  async findAll() {
    return await this.prisma.taskAssignee.findMany({ include: { task: true, user: true } });
  }

  async findOne(id: string) {
    return await this.prisma.taskAssignee.findUnique({
      where: {id},
      include: {
        task: true,
        user: true,
      }
    })
  }

  async update(id: string, dto: UpdateTaskAssigneeDto) {
    return await this.prisma.taskAssignee.update({
      where: {id},
      data: dto, 
    })
  }

  async findByTask(taskId: string) {
    return await this.prisma.taskAssignee.findMany({ where: { taskId }, include: { user: true } });
  }

  async remove(id: string) {
    return await this.prisma.taskAssignee.delete({ where: { id } });
  }
}
