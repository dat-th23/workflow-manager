import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiPropertyOptional()
    @IsEmail()
    @IsOptional()
    email?: string;
  
    @ApiPropertyOptional()
    @MinLength(6)
    @IsOptional()
    password?: string;
}
