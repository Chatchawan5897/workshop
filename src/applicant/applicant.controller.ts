import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode , BadRequestException, NotFoundException} from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { CreateApplicantDto } from './dto/create-applicant.dto';
import { UpdateApplicantDto } from './dto/update-applicant.dto';
import { ApiTags, ApiResponse ,ApiOkResponse } from '@nestjs/swagger';
import { createResponse } from '../../response.uils'; // ปรับเส้นทางตามโครงสร้างโฟลเดอร์ของคุณ

@ApiTags()
@Controller('applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {}

  @Post()
  @HttpCode(201) 

  async create(@Body() CreateApplicantDto:CreateApplicantDto){
    try {
      const applicant = await this.applicantService.create(CreateApplicantDto);
      return createResponse(201, 'applicant created successfully', applicant, CreateApplicantDto, 
        '/applicant', 'POST');
    } catch (error) {
      throw new BadRequestException('Failed to create applicant: ' + error.message);

    }
  }
  // create(@Body() createApplicantDto: CreateApplicantDto) {
  //   return this.applicantService.create(createApplicantDto);
  // }

  @Get()
  findAll() {
    return this.applicantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApplicantDto: UpdateApplicantDto) {
    return this.applicantService.update(+id, updateApplicantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicantService.remove(+id);
  }
}
