import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubdistrictDto } from './dto/create-subdistrict.dto';
import { UpdateSubdistrictDto } from './dto/update-subdistrict.dto';
import { Subdistrict } from './entities/subdistrict.entity';

@Injectable()
export class SubdistrictService {
  constructor(
    @InjectRepository(Subdistrict)
    private readonly subdistrictRepository: Repository<Subdistrict>,
  ){}

  async create(CreateSubdistrictDto:CreateSubdistrictDto)
  {
    const subdistrict = await this.subdistrictRepository.create(CreateSubdistrictDto);
    const toCreate = await this.subdistrictRepository.insert(subdistrict);
    return toCreate;
  }

  // create(createSubdistrictDto: CreateSubdistrictDto) {
  //   return 'This action adds a new subdistrict';
  // }

  findAll() {
    return `This action returns all subdistrict`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subdistrict`;
  }

  update(id: number, updateSubdistrictDto: UpdateSubdistrictDto) {
    return `This action updates a #${id} subdistrict`;
  }

  remove(id: number) {
    return `This action removes a #${id} subdistrict`;
  }
}
