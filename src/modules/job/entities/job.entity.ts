import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractEntity } from 'src/database/abstract/abstractEntity.entity';
import { Column, Entity } from 'typeorm';
import { JobType } from '../enums/JobType';

@Entity('job')
@ObjectType()
export class Job extends AbstractEntity {
  @Field(() => JobType)
  @Column({ type: 'enum', enum: JobType })
  jobType: JobType;

  @Field()
  @Column({ type: 'varchar', length: 100 })
  jobTitle: string;

  @Field()
  @Column({ type: 'varchar', length: 100 })
  location: string;

  @Field()
  @Column({ type: 'varchar', length: 1000 })
  description: string;

  @Field()
  @Column({ type: 'varchar', length: 20 })
  salary: string;
}
