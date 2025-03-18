/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './DTOs/CreateCompanyInput';
import { UpdateCompanyInput } from './DTOs/UpdateCompanyInput';

@Injectable()
export class CompanyService {
  constructor(@InjectRepository(Company) private companyRepository: Repository<Company>) {}

  async findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  async findOne(id: string): Promise<Company | null> {
    return this.companyRepository.findOneBy({ id });
  }

  async create(company: CreateCompanyInput): Promise<Company> {
    const newCompany = this.companyRepository.create(company);
    return this.companyRepository.save(newCompany);
  }

  async delete(id: string): Promise<void> {
    await this.companyRepository.delete({ id });
  }

  async update(id: string, company: UpdateCompanyInput): Promise<void> {
    await this.companyRepository.update(id, company);
  }
}
