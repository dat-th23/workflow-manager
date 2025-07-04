import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'Task Manager v2' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'TMV2' })
  @IsNotEmpty()
  @IsString()
  projectKey: string;

  @ApiProperty({ example: 'Quản lý task và phân công công việc', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 'user-uuid-123' })
  @IsNotEmpty()
  @IsString()
  ownerId: string;
}
