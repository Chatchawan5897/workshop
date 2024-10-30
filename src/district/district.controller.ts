import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode , BadRequestException, NotFoundException} from '@nestjs/common';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { ApiTags, ApiResponse ,ApiOkResponse } from '@nestjs/swagger';
import { timestamp } from 'rxjs';
import { ServerType } from 'typeorm';
import { createResponse } from '../../response.uils'; // ปรับเส้นทางตามโครงสร้างโฟลเดอร์ของคุณ

@ApiTags()
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @Post()
  @HttpCode(201)
  @ApiResponse({
    status:201 , description: 'successfully'
  })
  
  async create(@Body() createDistrictDto:CreateDistrictDto) {
   try {
    const district = await this.districtService.create(createDistrictDto);
    return {
      status: 201 ,
      timestamp: new Date().toISOString(),
      ServerType: 'UAT',
      version:"1.0.0.0",
      path:"POST",
      message:"district created successfully",
      displaytotal: 0 ,
      total: 0 ,
      state: createDistrictDto,
      items: district
    }
   } catch (error) {
    throw new BadRequestException('Failed to create district: ' + error.message);
   }
  }


  @Get()
  @ApiOkResponse({ 
    description: 'district findAll successfully',
    type: CreateDistrictDto, // ประเภทข้อมูลที่ส่งคืนเป็น array ของ ProvinceDto
  })
  async findAll() {
      try {
        const district = await this.districtService.findAll();
        return {
          status: 201 ,
          timestamp: new Date().toISOString(),
          ServerType: 'UAT',
          version:"1.0.0.0",
          path:"GET",
          message:"district findAll successfully",
          displaytotal: 0 ,
          total: 0 ,
          state: CreateDistrictDto,
          items: district
        }
      } catch (error) {
        throw new BadRequestException('Failed to findAll province: ' + error.message);
      }
  }
 

  @Get(':id')
  @ApiOkResponse({ 
    description: 'district findAll successfully',
    type: CreateDistrictDto, // ประเภทข้อมูลที่ส่งคืนเป็น array ของ ProvinceDto
  })
  async findOne(@Param('id') id: number) {
    try {
      const district = await this.districtService.findOne(id);
      if (!district){
        // ถ้าไม่มีค่า
        throw new NotFoundException('province with Id ${id} not found');
      }
      return {
        status: 201 ,
        timestamp: new Date().toISOString(),
        ServerType: 'UAT',
        version:"1.0.0.0",
        path:"GET",
        message:"district findOne successfully",
        displaytotal: 0 ,
        total: 0 ,
        state: CreateDistrictDto,
        items: district ,
        meta: {
          requestId : id,
          responseTime: `${Date.now() - Date.parse(new Date().toISOString())} ms`, // ระยะเวลาที่ใช้ในการประมวลผลคำขอ (แสดงตัวอย่าง)
        }
      }

    } catch (error) {
      throw new BadRequestException('Failed to findAll province: ' + error.message);
    }
    // return this.districtService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistrictDto: UpdateDistrictDto) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.districtService.remove(+id);
  }
}
