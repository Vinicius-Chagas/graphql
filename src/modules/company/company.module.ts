/*
https://docs.nestjs.com/modules
*/
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyService } from './company.service';
import { Module } from '@nestjs/common';
import { Company } from './entities/company.entity';
import { CompanyResolver } from './company.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [],
  providers: [CompanyService, CompanyResolver],
})
export class CompanyModule {}
