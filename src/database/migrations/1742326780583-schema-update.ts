import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1742326780583 implements MigrationInterface {
    name = 'SchemaUpdate1742326780583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."job_jobtype_enum" AS ENUM('full time', 'part time', 'contract', 'internship')`);
        await queryRunner.query(`CREATE TABLE "job" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "jobType" "public"."job_jobtype_enum" NOT NULL, "jobTitle" character varying(100) NOT NULL, "location" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "salary" character varying(20) NOT NULL, CONSTRAINT "PK_98ab1c14ff8d1cf80d18703b92f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "email" character varying(100) NOT NULL, "phone" character varying(20) NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "company"`);
        await queryRunner.query(`DROP TABLE "job"`);
        await queryRunner.query(`DROP TYPE "public"."job_jobtype_enum"`);
    }

}
