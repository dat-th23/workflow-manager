import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateTaskAssigneeDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    taskId: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsUUID()
    userId: string;
}
