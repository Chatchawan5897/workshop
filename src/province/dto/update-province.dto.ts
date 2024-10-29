import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateProvinceDto } from './create-province.dto';

export class UpdateProvinceDto extends PartialType(CreateProvinceDto) {
    @IsNotEmpty() // ใช้สำหรับตรวจสอบความไม่ว่างถ้าฟิลด์ถูกระบุ
    province_name?: string; // ใช้ ? เพื่อทำให้ฟิลด์เป็น optional

}
