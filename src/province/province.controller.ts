import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode , BadRequestException, NotFoundException} from '@nestjs/common';
import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { ApiTags, ApiResponse ,ApiOkResponse } from '@nestjs/swagger';

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
      return {
        status: 201, // สถานะ HTTP สำหรับการตอบกลับ
        timestamp: new Date().toISOString(), // เปลี่ยนเป็นรูปแบบที่อ่านง่าย
        ServerType: "mysql", // ข้อมูลที่บ่งบอกถึงประเภทเซิร์ฟเวอร์ (สามารถเปลี่ยนเป็นข้อมูลจริงได้)
        version: "1.0.0.0", // เวอร์ชันของ API หรือแอปพลิเคชัน
        path: "/province", // เส้นทางที่ใช้ในการเรียก API
        method: "POST", // HTTP method ที่ใช้
        message: 'province created successfully', // ข้อความบอกความสำเร็จ
        displaytotal: 0, // จำนวนที่ต้องการแสดง (อาจใช้สำหรับ paginated responses)
        total: 0, // จำนวนทั้งหมด (ในกรณีที่คุณใช้ pagination)
        state: CreateProvinceDto, // ข้อมูลที่ถูกส่งเข้ามาใน Request Body
        items: province // รายละเอียด province ที่ถูกสร้าง (หรือสามารถใช้เป็น array หากต้องการส่งหลายรายการ)
      }
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
      return {
       
        status: 200, // สถานะ HTTP สำหรับการตอบกลับ
        timestamp: new Date().toISOString(), // เปลี่ยนเป็นรูปแบบที่อ่านง่าย
        ServerType: "mysql", // ข้อมูลที่บ่งบอกถึงประเภทเซิร์ฟเวอร์ (สามารถเปลี่ยนเป็นข้อมูลจริงได้)
        version: "1.0.0.0", // เวอร์ชันของ API หรือแอปพลิเคชัน
        path: "/province", // เส้นทางที่ใช้ในการเรียก API
        method: "GET", // HTTP method ที่ใช้
        message: 'province findAll successfully', // ข้อความบอกความสำเร็จ
        displaytotal: provinces.length, // จำนวนที่ต้องการแสดง (อาจใช้สำหรับ paginated responses)
        total: 0, // นับจำนวนทั้งหมด
        state: CreateProvinceDto, // ข้อมูลที่ถูกส่งเข้ามาใน Request Body
        items: provinces  // รายละเอียด province ที่ถูกสร้าง (หรือสามารถใช้เป็น array หากต้องการส่งหลายรายการ)
      }
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
      return {
        status: 200,
        timestamp: new Date().toISOString(),
        ServerType: "mysql",
        version: "1.0.0.0",
        path: `/province/${id}`, // เส้นทางที่ใช้ในการเรียก API
        method: "GET",
        message: 'Province retrieved successfully',
        item: province, // ส่งคืน province ที่พบ
        meta: {
          requestId: id, // ID ของคำขอ
          responseTime: `${Date.now() - Date.parse(new Date().toISOString())} ms`, // ระยะเวลาที่ใช้ในการประมวลผลคำขอ (แสดงตัวอย่าง)
        }
      };
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
