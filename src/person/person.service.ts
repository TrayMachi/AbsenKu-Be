import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PersonService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createPersonDto: Prisma.PersonCreateInput) {
    return this.databaseService.person.create({
      data: createPersonDto,
    });
  }

  async findAll(
    userId: string,
    role?: 'Dosen' | 'Asdos' | 'Mahasiswa',
    present?: "True" | "False",
  ) {
    if (role && present)
      
      return this.databaseService.person.findMany({
        where: {
          role,
          userId,
          present: present === "True" ? true : false,
        },
      });
    else if (role)
      return this.databaseService.person.findMany({
        where: {
          role,
          userId,
        },
      });
    else if (present)
      return this.databaseService.person.findMany({
        where: {
          userId,
          present: present === "True" ? true : false,
        },
      });
    else
      return this.databaseService.person.findMany({
        where: {
          userId,
        },
      });
  }

  async findOne(id: string) {
    return this.databaseService.person.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updatePersonDto: Prisma.PersonUpdateInput) {
    return this.databaseService.person.update({
      where: {
        id,
      },
      data: updatePersonDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.person.delete({
      where: {
        id,
      },
    });
  }
}
