import { QueryOptimizerModule } from './modules/QueryOptimizer/queryoptimizer.module';
import { CompanyModule } from './modules/company/company.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { JobModule } from './modules/job/job.module';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/typeorm/config';

@Module({
  imports: [
    QueryOptimizerModule,
    CompanyModule,
    DatabaseModule,
    JobModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      sortSchema: true,
      debug: true,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
