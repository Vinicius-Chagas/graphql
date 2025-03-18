import { InputType } from '@nestjs/graphql';
import { CreateJobInput } from './CreateJobInput';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateJobInput extends PartialType(CreateJobInput) {}
