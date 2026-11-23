import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateFoodTypeDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    type_name: string;
}
