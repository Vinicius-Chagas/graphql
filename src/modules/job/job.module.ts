/*
https://docs.nestjs.com/modules
*/
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Job } from './entities/job.entity';
import { JobResolver } from './job.resolver';
import { JobService } from './job.service';

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  controllers: [],
  providers: [JobService, JobResolver],
})
export class JobModule {}
