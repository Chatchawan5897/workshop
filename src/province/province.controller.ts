import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode , BadRequestException, NotFoundException} from '@nestjs/common';
import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { ApiTags, ApiResponse ,ApiOkResponse } from '@nestjs/swagger';
import { createResponse } from '../../response.uils'; // ปรับเส้นทางตามโครงสร้างโฟลเดอร์ของคุณ

@ApiTags()
@Controller('province')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Post()
  @HttpCode(201) // กำหนดสถานะ 201 สำหรับการสร้างผู้ใช้
  @ApiResponse({ status: 201, description: 'The province has been successfully created.' })
  async create(@Body() CreateProvinceDto:CreateProvinceDto){
    try {
      const province = await this.provinceService.create(CreateProvinceDto);
      return createResponse(201, 'Province created successfully', province, CreateProvinceDto, '/province', 'POST');
    } catch (error) {
      throw new BadRequestException('Failed to create province: ' + error.message);
    }
  }

  @Get()
  @ApiOkResponse({ 
    description: 'Provinces findAll successfully',
    type: [CreateProvinceDto], // ประเภทข้อมูลที่ส่งคืนเป็น array ของ ProvinceDto
  })
  async findAll() {
    try {
      const provinces  = await this.provinceService.findAll();
      return createResponse(201, 'Province findAll successfully', provinces, CreateProvinceDto, '/province', 'GET');
      
    } catch (error) {
      throw new BadRequestException('Failed to retrieve  province: ' + error.message);
    }
  }

  @Get(':id')
  @ApiOkResponse({ 
    description: 'Province retrieved successfully',
    type: CreateProvinceDto, // กำหนดให้ส่งคืนเป็น ProvinceDto
  })
  async findOne(@Param('id') id:number){
    try {
      const province = await this.provinceService.findOne(id);
      if (!province){
        // ถ้าไม่มีค่า 
        throw new NotFoundException('province with Id ${id} not found');
      }
      return createResponse(201, 'Province findAll successfully', province, CreateProvinceDto, '/province', 'GET');
    } catch (error) {
       // จัดการกับข้อผิดพลาดที่เกิดขึ้น
       throw new BadRequestException('Failed to retrieve province: ' + error.message);
    }
  }

  @Patch(':id')
  async update(@Param('id') id:number, @Body() UpdateProvinceDto: UpdateProvinceDto){
    const province = await this.provinceService.findOne(id) ; // ทำการค้นหา id ของจังหวัด
    if (!province){
      // ถ้าไม่มีค่า 
      throw new NotFoundException('province with Id ${id} not found');
    }
     // ใช้ service ในการอัปเดตจังหวัด
     return this.provinceService.update(id, UpdateProvinceDto);
  }
 

 
}
