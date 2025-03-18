import { DataSource } from 'typeorm';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import dataSource from './data-source';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: DataSource,
      useValue: dataSource,
    },
  ],
  exports: [DataSource],
})
export class TypeOrmModule {}
