import { InputType, OmitType } from '@nestjs/graphql';
import { Job } from '../entities/job.entity';

@InputType()
export class CreateJobInput extends OmitType(Job, ['id', 'updatedAt', 'createdAt'], InputType) {}
