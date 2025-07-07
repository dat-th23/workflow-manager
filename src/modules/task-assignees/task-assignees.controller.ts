import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TaskAssigneesService } from './task-assignees.service';
import { CreateTaskAssigneeDto } from './dto/create-task-assignee.dto';
import { UpdateTaskAssigneeDto } from './dto/update-task-assignee.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Task Assignees')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('task-assignees')
export class TaskAssigneesController {
  constructor(
    private readonly prisma: TaskAssigneesService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Assign a user to a task' })
  create(@Body() dto: CreateTaskAssigneeDto) {
    return this.prisma.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all task assignees' })
  findAll() {
    return this.prisma.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific task assignee by ID' })
  findOne(@Param('id') id: string) {
    return this.prisma.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a task assignee' })
  update(@Param('id') id: string, @Body() dto: UpdateTaskAssigneeDto) {
    return this.prisma.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a task assignee from a task' })
  remove(@Param('id') id: string) {
    return this.prisma.remove(id);
  }
}
