import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { DatabaseConfig } from 'src/config/typeorm/database-config.factory';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DatabaseConfig,
      dataSourceFactory: async (options) => {
        if (options) {
          const dataSource = await new DataSource(options).initialize();
          return dataSource;
        }
        throw new Error('Database connection options are not defined');
      },
    }),
  ],
  providers: [],
  controllers: [],
})
export class DatabaseModule {}
