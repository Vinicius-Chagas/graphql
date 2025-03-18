/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { CreateJobInput } from './DTOs/CreateJobInput';
import { UpdateJobInput } from './DTOs/UpdateJobInput';

@Injectable()
export class JobService {
  constructor(@InjectRepository(Job) private jobRepository: Repository<Job>) {}

  async findAll(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  async findOne(id: string): Promise<Job | null> {
    return this.jobRepository.findOneBy({ id });
  }

  async create(job: CreateJobInput): Promise<Job> {
    const newJob = this.jobRepository.create(job);
    return this.jobRepository.save(newJob);
  }

  async delete(id: string): Promise<void> {
    await this.jobRepository.delete({ id });
  }

  async update(id: string, company: UpdateJobInput): Promise<void> {
    await this.jobRepository.update(id, company);
  }
}
