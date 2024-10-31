// create-address.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
    @IsString()
    @IsNotEmpty()
    street: string;

    @IsString()
    @IsNotEmpty()
    subDistrict: string;

    @IsString()
    @IsNotEmpty()
    district: string;

    @IsString()
    @IsNotEmpty()
    province: string;

    @IsString()
    @IsNotEmpty()
    postalCode: string;

    @IsNotEmpty()
    applicantId: number; // ใช้สำหรับอ้างอิง applicant
}

