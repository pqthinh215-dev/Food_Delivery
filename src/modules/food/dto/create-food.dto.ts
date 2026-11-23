import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  food_name: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  image?: string;

  @IsNumber()
  @Min(0, { message: 'Giá món ăn không được âm' })
  price: number;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  description?: string;

  @IsInt()
  @IsOptional()
  type_id?: number;
}
