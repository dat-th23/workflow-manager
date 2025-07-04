import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { TaskPriority, TaskStatus } from "generated/prisma";

export class CreateTaskDto {
@ApiProperty({ example: 'Viết tài liệu API' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'Cần hoàn thành tài liệu cho module Auth', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ enum: TaskStatus, default: TaskStatus.TODO })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiProperty({ enum: TaskPriority, default: TaskPriority.MEDIUM })
  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;

  @ApiProperty({ example: 'project-uuid-123' })
  @IsNotEmpty()
  @IsString()
  projectId: string;

  @ApiProperty({ example: '2025-07-10T10:00:00Z', required: false })
  @IsOptional()
  @IsDateString()
  dueDate?: Date;
}
