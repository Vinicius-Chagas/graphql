import { InputType } from '@nestjs/graphql';
import { Job } from '../entities/job.entity';
import { OmitType } from '@nestjs/mapped-types';

@InputType()
export class CreateJobInput extends OmitType(Job, ['id', 'updatedAt', 'createdAt']) {}
