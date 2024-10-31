// create-document.dto.ts
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDocumentDto {
    @IsString()
    @IsNotEmpty()
    documentNumber: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    fee: number;

    @IsString()
    @IsNotEmpty()
    approvalStatus: string;

    @IsString()
    @IsNotEmpty()
    documentImage: string;

    @IsNotEmpty()
    applicantId: number; // ใช้สำหรับอ้างอิง applicant
}

