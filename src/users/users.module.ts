import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Province } from 'src/province/entities/province.entity';


@Module({
  imports:[
    TypeOrmModule.forFeature([User]) , // สำหรับ user
    TypeOrmModule.forFeature([Province]) , // สำหรับ province
],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
