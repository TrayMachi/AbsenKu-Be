import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { Prisma } from '@prisma/client';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: Prisma.PersonCreateInput) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll(@Query('role') role?: 'Dosen' | 'Asdos' | 'Mahasiswa', @Query('userId') userId?: string){
    return this.personService.findAll(role, userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePersonDto: Prisma.PersonUpdateInput,
  ) {
    return this.personService.update(id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(id);
  }
}
