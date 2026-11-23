import { IsDate, IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLikeReDto {
  @IsInt()
  user_id: number;

  @IsInt()
  res_id: number;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  date_like?: Date;
}
