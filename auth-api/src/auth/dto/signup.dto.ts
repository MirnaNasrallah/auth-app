import { IsEmail, IsNotEmpty, IsString, MinLength, Matches } from 'class-validator';
export class SignupDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/, {
    message: 'Password must be at least 8 characters long and include a letter, a number, and a special character',
  })
  password: string;
}