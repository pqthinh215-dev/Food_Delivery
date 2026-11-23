import { IsInt } from "class-validator";

export class CreateLikeReDto {
    @IsInt()
    user_id: number;

    @IsInt()
    res_id: number;
}
