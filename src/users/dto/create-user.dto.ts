import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber , IsOptional } from 'class-validator';


export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  prefix: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  nationalId: string;

  @IsPhoneNumber()
  mobile: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  thaiIdVerification: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  provinceId?: number; // Optional field for province
}
