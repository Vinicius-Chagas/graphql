import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default (): { db: TypeOrmModuleOptions } => ({
  db: {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    cache: true,
    port: parseInt(process.env.DB_PORT || '', 10) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'estudo',
    synchronize: false,
    migrationsRun: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/database/migrations/**/*{.ts,.js}'],
    autoLoadEntities: true,
    logging: process.env.DB_LOGGING !== 'false',
    ssl:
      process.env.NODE_ENV !== 'production'
        ? false
        : {
            rejectUnauthorized: false,
          },
    extra: {
      connectionLimit: 20, // Number of connections increased to improve parallel calls
    },
  },
});
