import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDistrictDto {
    @IsNotEmpty()
    @ApiProperty({ description: 'district' })
    district_name: string;
}
