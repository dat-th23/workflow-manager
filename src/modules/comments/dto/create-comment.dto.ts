import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateCommentDto {
    @ApiProperty({ example: 'Task này rất quan trọng'})
    @IsString()
    content: string;

    @ApiProperty({ example: 'task-uuid-123'})
    @IsNotEmpty()
    @IsUUID()
    taskId: string;

    @ApiProperty({ example: 'user-uuid-123' })
    @IsNotEmpty()
    @IsUUID()
    userId: string;
}
