import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCompanyInput } from './CreateCompanyInput';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {}
