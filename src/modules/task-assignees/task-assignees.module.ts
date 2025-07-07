import { Module } from '@nestjs/common';
import { TaskAssigneesService } from './task-assignees.service';
import { TaskAssigneesController } from './task-assignees.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TaskAssigneesController],
  providers: [TaskAssigneesService, PrismaService],
})
export class TaskAssigneesModule {}
