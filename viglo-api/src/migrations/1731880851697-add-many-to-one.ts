import { MigrationInterface, QueryRunner } from "typeorm";

export class AddManyToOne1731880851697 implements MigrationInterface {
    name = 'AddManyToOne1731880851697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_fde44edfeb831a0f12733b09383"`);
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "REL_fde44edfeb831a0f12733b0938"`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_fde44edfeb831a0f12733b09383" FOREIGN KEY ("partner_id") REFERENCES "partners"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_fde44edfeb831a0f12733b09383"`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "REL_fde44edfeb831a0f12733b0938" UNIQUE ("partner_id")`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_fde44edfeb831a0f12733b09383" FOREIGN KEY ("partner_id") REFERENCES "partners"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
