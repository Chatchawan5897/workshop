import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Province } from 'src/province/entities/province.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
    @InjectRepository(Province)
    private readonly ProvinceRepository: Repository<Province>,
  ){}


  async create(CreateUserDto:CreateUserDto){
    // ทำการค้นหา จังหวัดตาม id 
    const province = await this.ProvinceRepository.findOne({ where : {id: CreateUserDto.provinceId}});
    if (!province){
      // ตรวจสอบ พบหรือไม่
      throw new Error('province with id ${CreateUserDto.provinceId} not found');
    }
    
    const newUser = this.UserRepository.create({
      ...CreateUserDto,
      province,
    });
    return this.UserRepository.save(newUser);
    // const user = await this.UserRepository.create(CreateUserDto);
    // const toCreate = await this.UserRepository.insert(user);
    // return toCreate;

  }
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
