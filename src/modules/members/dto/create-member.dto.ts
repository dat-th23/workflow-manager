import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { Role } from "generated/prisma";

export class CreateMemberDto {
    @ApiProperty({ example: 'user-uuid-123' })
    @IsNotEmpty()
    @IsUUID()
    userId: string;

    @ApiProperty({ example: 'project-uuid-123' })
    @IsNotEmpty()
    @IsUUID()
    projectId: string;

    @ApiProperty({ enum: Role, default: Role.MEMBER })
    @IsEnum(Role)
    role: Role;
}