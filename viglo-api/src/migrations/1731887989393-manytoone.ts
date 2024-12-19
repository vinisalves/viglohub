import { MigrationInterface, QueryRunner } from "typeorm";

export class Manytoone1731887989393 implements MigrationInterface {
    name = 'Manytoone1731887989393'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "team_members" DROP CONSTRAINT "fk_team_member_user_id"`);
        await queryRunner.query(`ALTER TABLE "team_members" DROP CONSTRAINT "REL_c2bf4967c8c2a6b845dadfbf3d"`);
        await queryRunner.query(`ALTER TABLE "team_members" ADD CONSTRAINT "fk_team_member_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "team_members" DROP CONSTRAINT "fk_team_member_user_id"`);
        await queryRunner.query(`ALTER TABLE "team_members" ADD CONSTRAINT "REL_c2bf4967c8c2a6b845dadfbf3d" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "team_members" ADD CONSTRAINT "fk_team_member_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
