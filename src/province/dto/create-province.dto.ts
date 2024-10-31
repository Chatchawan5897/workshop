import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProvinceDto {
    @IsNotEmpty()
    @ApiProperty({ description: 'ชื่อจังหวัด (ภาษาไทย)' })
    nameTh: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'ชื่อจังหวัด (ภาษาอังกฤษ)' })
    nameEN: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'รหัสจังหวัด (ถ้ามี)' })
    code?: string; // รหัสจังหวัด (ถ้ามี)
}



// import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';

// export class CreateProvinceDto {
//     @IsNotEmpty()
//     @ApiProperty({ description: 'ชื่อจังหวัด (ภาษาไทย)' })
//     nameTh: string;

//     @IsString()
//     @IsNotEmpty()
//     @ApiProperty({ description: 'ชื่อจังหวัด (ภาษาอังกฤษ)' })
//     nameEN: string;

//     @IsString()
//     @IsOptional()
//     @ApiProperty({ description: 'รหัสจังหวัด (ถ้ามี)' })
//     code?: string;

//     @IsDateString()
//     @ApiProperty({ description: 'วันที่สร้าง' })
//     createdAt: string;

//     @IsString()
//     @ApiProperty({ description: 'ผู้สร้าง' })
//     createdBy: string;

//     @IsDateString()
//     @ApiProperty({ description: 'วันที่แก้ไขล่าสุด' })
//     updatedAt: string;

//     @IsString()
//     @ApiProperty({ description: 'ผู้แก้ไขล่าสุด' })
//     updatedBy: string;
// }

