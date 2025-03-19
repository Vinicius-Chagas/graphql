import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Company } from './entities/company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyInput } from './DTOs/CreateCompanyInput';
import { UpdateCompanyInput } from './DTOs/UpdateCompanyInput';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private companyService: CompanyService) {}

  @Query(() => [Company])
  async findAllCompanies() {
    try {
      return await this.companyService.findAll();
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }

  @Query(() => Company)
  async findOneCompany(@Args('id') id: string) {
    try {
      return await this.companyService.findOne(id);
    } catch (error) {
      console.error('Error fetching company:', error);
    }
  }

  @Mutation(() => Company)
  async createCompany(
    @Args('company', { type: () => CreateCompanyInput }) company: CreateCompanyInput,
  ) {
    try {
      return await this.companyService.create(company);
    } catch (error) {
      console.error('Error creating company:', error);
    }
  }

  @Mutation(() => Boolean)
  async deleteCompany(@Args('id') id: string) {
    try {
      await this.companyService.delete(id);
      return true;
    } catch (error) {
      console.error('Error deleting company:', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updateCompany(
    @Args('id') id: string,
    @Args('company', { type: () => UpdateCompanyInput }) company: UpdateCompanyInput,
  ) {
    try {
      await this.companyService.update(id, company);
      return true;
    } catch (error) {
      console.error('Error updating company:', error);
      return false;
    }
  }
}
