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

  async findAll(role?: 'Dosen' | 'Asdos' | 'Mahasiswa', userId?: string) {
    if (role)
      return this.databaseService.person.findMany({
        where: {
          role,
          userId,
        },
      });
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
