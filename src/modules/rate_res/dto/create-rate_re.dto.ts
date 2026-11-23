import { IsDate, IsInt, IsOptional, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRateReDto {
  @IsInt()
  user_id: number;

  @IsInt()
  res_id: number;

  @IsInt()
  @Min(1, { message: 'Đánh giá tối thiểu 1 sao' })
  @Max(5, { message: 'Đánh giá tối đa 5 sao' })
  amount: number;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  date_rate?: Date;
}
