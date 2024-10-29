import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { Province } from './entities/province.entity';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}

  async create(CreateProvinceDto: CreateProvinceDto) {
    const province = await this.provinceRepository.create(CreateProvinceDto);
    const toCreate = await this.provinceRepository.insert(province);
    return toCreate;
    // const province = await this.provinceRepository.create(CreateProvinceDto);
    // return this.provinceRepository.save(province);
  }

  async findAll() {
    const province = await this.provinceRepository.find();
    return province;
    // ถ้าเขียน สั้นๆ
    // return this.provinceRepository.find(); // ดึงข้อมูลจังหวัดทั้งมหด
  }

  async findOne(id: number) {
    const province = await this.provinceRepository.findOne({ where: { id } });
    return province;
  }

  async update(id: number, updateProvinceDto: UpdateProvinceDto) {
    const province = await this.provinceRepository.findOne({ where: { id } }); // ทำการค้นหาข้อมูลของจังหวัด
    if (!province) {
      throw new NotFoundException(`Province with ID ${id} not found`);
    }
     // อัปเดตฟิลด์ที่มีการส่งเข้ามา
     Object.assign(province, updateProvinceDto);
     return this.provinceRepository.save(province);
  }

  
 
}