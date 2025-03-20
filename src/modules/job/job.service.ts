/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './entities/job.entity';
import { CreateJobInput } from './DTOs/CreateJobInput';
import { UpdateJobInput } from './DTOs/UpdateJobInput';
import { GraphQLResolveInfo } from 'graphql';
import { QueryOptimizerService } from '../QueryOptimizer/queryoptimizer.service';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job) private jobRepository: Repository<Job>,
    private queryOptimizer: QueryOptimizerService,
  ) {}

  async findAll(info: GraphQLResolveInfo): Promise<Job[]> {
    const select = this.queryOptimizer.generateSelect(info);
    return await this.jobRepository.find({ select });
  }

  async findOne(id: string, info: GraphQLResolveInfo): Promise<Job | null> {
    const select = this.queryOptimizer.generateSelect(info);
    return await this.jobRepository.findOne({ where: { id }, select });
  }

  async create(job: CreateJobInput): Promise<Job> {
    const newJob = this.jobRepository.create(job);
    return await this.jobRepository.save(newJob);
  }

  async delete(id: string): Promise<void> {
    await this.jobRepository.delete({ id });
  }

  async update(id: string, company: UpdateJobInput): Promise<void> {
    await this.jobRepository.update(id, company);
  }
}
