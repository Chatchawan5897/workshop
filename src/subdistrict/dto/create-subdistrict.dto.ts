import { IsString, IsNotEmpty, IsNumber , IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateSubdistrictDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'subdistrict' })
  nameTH: string;
  @IsString()
  @IsNotEmpty()
  nameEN: string;
  @IsOptional()
  code?: string; // รหัสจังหวัด (ถ้ามี)
}
