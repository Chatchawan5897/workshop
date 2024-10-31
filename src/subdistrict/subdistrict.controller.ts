import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode , BadRequestException, NotFoundException} from '@nestjs/common';
import { SubdistrictService } from './subdistrict.service';
import { CreateSubdistrictDto } from './dto/create-subdistrict.dto';
import { UpdateSubdistrictDto } from './dto/update-subdistrict.dto';
import { ApiTags, ApiResponse ,ApiOkResponse } from '@nestjs/swagger';
import { createResponse } from '../../response.uils'; // ปรับเส้นทางตามโครงสร้างโฟลเดอร์ของคุณ


@Controller('subdistrict')
export class SubdistrictController {
  constructor(private readonly subdistrictService: SubdistrictService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() CreateSubdistrictDto:CreateSubdistrictDto){
    try {
      const subdistrict = await this.subdistrictService.create(CreateSubdistrictDto);
      return createResponse(201 , 'subdistrict created successfully' , subdistrict , CreateSubdistrictDto , '/subdistrict' , 'POST');
    } catch (error) {
      throw new BadRequestException('Failed to create subdistrict: ' + error.message);
    }
  }

  @Get()
  findAll() {
    return this.subdistrictService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subdistrictService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubdistrictDto: UpdateSubdistrictDto) {
    return this.subdistrictService.update(+id, updateSubdistrictDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subdistrictService.remove(+id);
  }
}
