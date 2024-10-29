import { IsNotEmpty } from 'class-validator';

export class CreateSubdistrictDto {
  @IsNotEmpty()
  subdistrict_name: string;
}
