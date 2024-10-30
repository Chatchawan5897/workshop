import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvinceModule } from './province/province.module';
import { DistrictModule } from './district/district.module';
import { SubdistrictModule } from './subdistrict/subdistrict.module';
import { Province } from './province/entities/province.entity';
import { District } from './district/entities/district.entity';
import { Subdistrict } from './subdistrict/entities/subdistrict.entity';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),// ทำให้สามารถเข้าถึงค่าจาก .env
     TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST, // ค่าจาก .env
      port: +process.env.DB_PORT, // แปลงเป็น Number
      username: process.env.DB_USERNAME, // ค่าจาก .env
      password: process.env.DB_PASSWORD, // ค่าจาก .env
      database: process.env.DB_DATABASE, // ค่าจาก .env
      entities: [
        Province,District ,Subdistrict
      ],
      synchronize: true,
    }),

    ProvinceModule, DistrictModule, SubdistrictModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

