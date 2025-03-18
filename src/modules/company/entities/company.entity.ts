import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractEntity } from 'src/database/abstract/abstractEntity.entity';
import { Column, Entity } from 'typeorm';

@Entity('company')
@ObjectType()
export class Company extends AbstractEntity {
  @Field()
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Field()
  @Column({ type: 'varchar', length: 1000 })
  description: string;

  @Field()
  @Column({ type: 'varchar', length: 100 })
  email: string;
  @Field()
  @Column({ type: 'varchar', length: 20 })
  phone: string;
}
