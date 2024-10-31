import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinceService } from './province.service';
import { ProvinceController } from './province.controller';
import { Province } from './entities/province.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Province])],
  exports:[TypeOrmModule], //  Export TypeOrmModule เพื่อให้ใช้ได้ใน module อื่น
  controllers: [ProvinceController],
  providers: [ProvinceService],
})
export class ProvinceModule {}
