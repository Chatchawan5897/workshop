import { IsString, IsNotEmpty, IsNumber , IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDistrictDto {
    @IsNotEmpty()
    @ApiProperty({ description: 'district' })
    nameTH: string;
    @IsString()
    @IsNotEmpty()
    nameEN: string;
    @IsOptional()
    code?: string; // รหัสจังหวัด (ถ้ามี)
}
