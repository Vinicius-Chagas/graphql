import { InputType } from '@nestjs/graphql';
import { Company } from '../entities/company.entity';
import { OmitType } from '@nestjs/mapped-types';

@InputType()
export class CreateCompanyInput extends OmitType(Company, ['id', 'createdAt', 'updatedAt']) {}
