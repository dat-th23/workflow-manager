import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateTaskAssigneeDto {
    @ApiProperty({ example: 'task-uuid-123' })
    @IsNotEmpty()
    @IsUUID()
    taskId: string;

    @ApiProperty({ example: 'user-uuid-123' })
    @IsNotEmpty()
    @IsUUID()
    userId: string;
}
