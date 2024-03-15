import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class PersonService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createPersonDto: Prisma.PersonCreateInput): Promise<{
        id: string;
        userId: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        present: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(role?: 'Dosen' | 'Asdos' | 'Mahasiswa', userId?: string): Promise<{
        id: string;
        userId: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        present: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        userId: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        present: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updatePersonDto: Prisma.PersonUpdateInput): Promise<{
        id: string;
        userId: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        present: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        userId: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        present: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
