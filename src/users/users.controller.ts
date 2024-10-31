import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode , BadRequestException, NotFoundException} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiResponse ,ApiOkResponse } from '@nestjs/swagger';
import { createResponse } from '../../response.uils'; // ปรับเส้นทางตามโครงสร้างโฟลเดอร์ของคุณ

@ApiTags()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201) //กำหนดสถานะ สำหรับการสร้าง
  async create(@Body() CreateUserDto: CreateUserDto){
    try {
      const user = await this.usersService.create(CreateUserDto);
      return createResponse(201 , 'user created successfully', user, CreateUserDto, '/user' , 'POST')
    } catch (error) {
      throw new BadRequestException('Failed to create user: ' + error.message);
    }
  }

  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
