import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Job } from './entities/job.entity';
import { JobService } from './job.service';
import { UpdateJobInput } from './DTOs/UpdateJobInput';
import { CreateJobInput } from './DTOs/CreateJobInput';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => Job)
export class JobResolver {
  constructor(private jobService: JobService) {}

  @Query(() => [Job])
  async findAllJobs(@Info() info: GraphQLResolveInfo) {
    try {
      return await this.jobService.findAll(info);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  }

  @Query(() => Job)
  async findOneJob(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    try {
      return await this.jobService.findOne(id, info);
    } catch (error) {
      console.error('Error fetching job:', error);
    }
  }

  @Mutation(() => Job)
  async createJob(@Args('job', { type: () => CreateJobInput }) job: CreateJobInput) {
    try {
      return await this.jobService.create(job);
    } catch (error) {
      console.error('Error creating job:', error);
    }
  }

  @Mutation(() => Boolean)
  async deleteJob(@Args('id') id: string) {
    try {
      await this.jobService.delete(id);
      return true;
    } catch (error) {
      console.error('Error deleting job:', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updateJob(
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
