import { InputType } from '@nestjs/graphql';
import { CreateCompanyInput } from './CreateCompanyInput';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {}
