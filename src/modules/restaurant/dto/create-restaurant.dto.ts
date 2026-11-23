import { IsInt, IsNotEmpty, IsOptional, IsString, Max, MaxLength, Min } from 'class-validator';

export class CreateRestaurantDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    res_name: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    image?: string;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    description?: string;
}
