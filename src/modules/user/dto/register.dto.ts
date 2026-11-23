import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
    @IsString()
    @IsNotEmpty({ message: 'Họ tên không được để trống' })
    @MaxLength(255)
    fullname: string;

    @IsEmail({}, { message: 'Email không đúng định dạng' })
    @MaxLength(255)
    email: string;

    @IsString()
    @MinLength(6, { message: 'Mật khẩu phải từ 6 ký tự trở lên' })
    @MaxLength(255)
    password: string;
}

