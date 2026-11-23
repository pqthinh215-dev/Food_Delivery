import { IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, Min } from "class-validator";

export class CreateSubFoodDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    sub_name: string;

    @IsNumber()
    @Min(0)
    sub_price: number;

    @IsInt()
    food_id: number;
}
