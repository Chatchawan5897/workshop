import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProvinceDto {
    @IsNotEmpty()
    @ApiProperty({ description: 'province' })
    province_name: string;
}
