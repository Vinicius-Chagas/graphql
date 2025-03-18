import { Args, Query, Resolver } from '@nestjs/graphql';
import { Job } from './entities/job.entity';
import { JobService } from './job.service';
import { UpdateJobInput } from './DTOs/UpdateJobInput';
import { CreateJobInput } from './DTOs/CreateJobInput';

@Resolver(() => Job)
export class JobResolver {
  constructor(private jobService: JobService) {}

  @Query(() => [Job])
  async findAll() {
    try {
      return await this.jobService.findAll();
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  }

  @Query(() => Job)
  async findOne(@Args('id') id: string) {
    try {
      return await this.jobService.findOne(id);
    } catch (error) {
      console.error('Error fetching job:', error);
    }
  }

  @Query(() => Job)
  async create(@Args('Job', { type: () => CreateJobInput }) job: Job) {
    try {
      return await this.jobService.create(job);
    } catch (error) {
      console.error('Error creating job:', error);
    }
  }

  @Query(() => Boolean)
  async delete(@Args('id') id: string) {
    try {
      await this.jobService.delete(id);
      return true;
    } catch (error) {
      console.error('Error deleting job:', error);
      return false;
    }
  }

  @Query(() => Boolean)
  async update(
    @Args('id') id: string,
    @Args('job', { type: () => UpdateJobInput }) job: UpdateJobInput,
  ) {
    try {
      await this.jobService.update(id, job);
      return true;
    } catch (error) {
      console.error('Error updating job:', error);
      return false;
    }
  }
}
