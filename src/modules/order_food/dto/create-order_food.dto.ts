import { IsArray, IsInt, IsOptional, IsString, MaxLength, Min } from "class-validator";

export class CreateOrderFoodDto {
    @IsInt()
    user_id: number;

    @IsInt()
    food_id: number;

    @IsInt()
    @Min(1, { message: 'Số lượng đặt tối thiểu là 1' })
    amount: number;

    @IsString()
    @IsOptional()
    @MaxLength(255)
    code?: string; // Mã giảm giá (có thể bỏ trống)

    @IsArray()
    @IsInt({ each: true, message: 'Mỗi phần tử trong arr_sub_id phải là số nguyên' })
    @IsOptional()
    arr_sub_id?: number[];
}
