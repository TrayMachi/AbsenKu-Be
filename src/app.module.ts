import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [DatabaseModule, PersonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
