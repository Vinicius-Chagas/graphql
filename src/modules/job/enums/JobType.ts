import { registerEnumType } from '@nestjs/graphql';

export enum JobType {
  FULL_TIME = 'full time',
  PART_TIME = 'part time',
  CONTRACT = 'contract',
  INTERNSHIP = 'internship',
}

registerEnumType(JobType, {
  name: 'JobType',
  description: 'The type of job',
});
