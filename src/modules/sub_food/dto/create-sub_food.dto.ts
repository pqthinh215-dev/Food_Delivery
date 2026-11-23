import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateSubFoodDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  sub_name: string;

  @IsNumber()
  @Min(0)
  sub_price: number;

  @IsInt()
  @IsOptional()
  food_id?: number;
}
