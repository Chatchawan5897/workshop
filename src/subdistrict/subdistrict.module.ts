import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubdistrictService } from './subdistrict.service';
import { SubdistrictController } from './subdistrict.controller';
import { Subdistrict } from './entities/subdistrict.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Subdistrict])],
  controllers: [SubdistrictController],
  providers: [SubdistrictService],
})
export class SubdistrictModule {}
