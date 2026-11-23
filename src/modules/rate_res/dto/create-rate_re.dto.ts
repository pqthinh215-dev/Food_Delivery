import { IsInt, Max, Min } from "class-validator";

export class CreateRateReDto {
    @IsInt()
    user_id: number;

    @IsInt()
    res_id: number;

    @IsInt()
    @Min(1, { message: 'Đánh giá tối thiểu 1 sao' })
    @Max(5, { message: 'Đánh giá tối đa 5 sao' })
    amount: number;
}
