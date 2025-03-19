import { InputType, PartialType } from '@nestjs/graphql';
import { CreateJobInput } from './CreateJobInput';

@InputType()
export class UpdateJobInput extends PartialType(CreateJobInput) {}
