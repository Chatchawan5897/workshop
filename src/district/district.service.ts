import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './entities/district.entity';


@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
  ){}

  async create(CreateDistrictDto :CreateDistrictDto ){
    const district = await this.districtRepository.create(CreateDistrictDto);
    const toCreate = await this.districtRepository.insert(district);
    return toCreate;
  }

  async findAll() {
    const toFind = await this.districtRepository.find();
    return toFind;
  }
  
  async findOne(id:number) {
    const district = await this.districtRepository.findOne({ where : {id}})
    return district;
  }



  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return `This action updates a #${id} district`;
  }

  remove(id: number) {
    return `This action removes a #${id} district`;
  }
}
