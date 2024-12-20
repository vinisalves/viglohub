import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1731534812101 implements MigrationInterface {
    name = 'Init1731534812101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "files" ("created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "key" character varying NOT NULL, CONSTRAINT "PK_6c16b9093a142e0e7613b04a3d9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_profile_gender_enum" AS ENUM('MALE', 'FEMALE', 'OTHER')`);
        await queryRunner.query(`CREATE TABLE "user_profile" ("created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "street" character varying, "city" character varying, "state" character varying, "postal_code" character varying(10), "country" character varying, "complement" character varying, "phone" character varying NOT NULL, "gender" "public"."user_profile_gender_enum", "birth_date" date, "user_id" uuid, "avatar_id" uuid, CONSTRAINT "UQ_eee360f3bff24af1b6890765201" UNIQUE ("user_id"), CONSTRAINT "REL_eee360f3bff24af1b689076520" UNIQUE ("user_id"), CONSTRAINT "REL_3c011f4eefd39da06c16ace49a" UNIQUE ("avatar_id"), CONSTRAINT "PK_f44d0cd18cfd80b0fed7806c3b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_settings_theme_enum" AS ENUM('DARK', 'LIGHT')`);
        await queryRunner.query(`CREATE TYPE "public"."user_settings_locale_enum" AS ENUM('EN', 'PT', 'ES')`);
        await queryRunner.query(`CREATE TABLE "user_settings" ("created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "theme" "public"."user_settings_theme_enum" NOT NULL DEFAULT 'LIGHT', "locale" "public"."user_settings_locale_enum" NOT NULL DEFAULT 'EN', "user_id" uuid, CONSTRAINT "REL_4ed056b9344e6f7d8d46ec4b30" UNIQUE ("user_id"), CONSTRAINT "PK_00f004f5922a0744d174530d639" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."partner_profile_theme_enum" AS ENUM('DARK', 'LIGHT')`);
        await queryRunner.query(`CREATE TABLE "partner_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "category" character varying NOT NULL, "street" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "postal_code" character varying(10) NOT NULL, "country" character varying NOT NULL, "complement" character varying, "phone" character varying NOT NULL, "theme" "public"."partner_profile_theme_enum" NOT NULL DEFAULT 'LIGHT', "partner_id" uuid, "logo_id" uuid, "banner_id" uuid, CONSTRAINT "REL_50daa33af878bb6b33b68a3b44" UNIQUE ("partner_id"), CONSTRAINT "REL_d50aa4ca9c1c0b68de9519c26d" UNIQUE ("logo_id"), CONSTRAINT "REL_7e549309be75f65476d4a0a98a" UNIQUE ("banner_id"), CONSTRAINT "PK_44faff5f032dc54a4484741b078" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "followers" ("created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid, "partner_id" uuid, CONSTRAINT "unique_follow" UNIQUE ("user_id", "partner_id"), CONSTRAINT "PK_c90cfc5b18edd29bd15ba95c1a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reviews" ("created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" SERIAL NOT NULL, "stars" integer NOT NULL, "comment" character varying NOT NULL, "user_id" uuid, "partner_id" uuid, CONSTRAINT "CHK_76682f10516849abb17cd501b9" CHECK ("stars" BETWEEN 1 AND 5), CONSTRAINT "PK_231ae565c273ee700b283f15c1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tag" character varying(20) NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "partner_settings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "partner_id" uuid, CONSTRAINT "REL_43e166de56d428d545402567fd" UNIQUE ("partner_id"), CONSTRAINT "PK_25ec258b870291f743c1ff00248" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "partners" ("created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "legal_name" character varying NOT NULL, "business_id" character varying NOT NULL, "profile_id" uuid, "settings_id" uuid, CONSTRAINT "UQ_dc1522c9bf1cabc0c85359c2d68" UNIQUE ("legal_name"), CONSTRAINT "UQ_ca34102014a1fd8163017a58dc2" UNIQUE ("business_id"), CONSTRAINT "REL_9fb38ad65447f6855d619dd2ce" UNIQUE ("profile_id"), CONSTRAINT "REL_f01a03d81d935e1e4545ef0ecf" UNIQUE ("settings_id"), CONSTRAINT "PK_998645b20820e4ab99aeae03b41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subscribers" ("created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid, "partner_id" uuid, CONSTRAINT "PK_cbe0a7a9256c826f403c0236b67" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team_members" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "team_id" uuid, "user_id" uuid, CONSTRAINT "REL_fdad7d5768277e60c40e01cdce" UNIQUE ("team_id"), CONSTRAINT "REL_c2bf4967c8c2a6b845dadfbf3d" UNIQUE ("user_id"), CONSTRAINT "PK_ca3eae89dcf20c9fd95bf7460aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teams" ("created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "partner_id" uuid, CONSTRAINT "REL_fde44edfeb831a0f12733b0938" UNIQUE ("partner_id"), CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "refresh_token" character varying, "recover_pass_token" character varying, "user_gateway_id" character varying, "profile_id" uuid, "settings_id" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_23371445bd80cb3e413089551b" UNIQUE ("profile_id"), CONSTRAINT "REL_aa03f4d6277ce01b387c99d856" UNIQUE ("settings_id"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "partners_tags" ("partner_id" uuid NOT NULL, "tag_id" uuid NOT NULL, CONSTRAINT "PK_69cefba3f2570d1a040530ced75" PRIMARY KEY ("partner_id", "tag_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0bb30eecfe3e109dd0c5fbfbc5" ON "partners_tags" ("partner_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a5dd1e5a6d76ed2607dd31b0e6" ON "partners_tags" ("tag_id") `);
        await queryRunner.query(`CREATE TABLE "partners_owners" ("partner_id" uuid NOT NULL, "user_id" uuid NOT NULL, CONSTRAINT "PK_1dc8e359c31a2f2c70a816f7fb7" PRIMARY KEY ("partner_id", "user_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2a67fee319e78de064f0210347" ON "partners_owners" ("partner_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_35ba194e002c739c3caf41fdac" ON "partners_owners" ("user_id") `);
        await queryRunner.query(`CREATE TABLE "team_members_roles" ("team_member_id" uuid NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_4d8cf4d84ca3df7d35f03654707" PRIMARY KEY ("team_member_id", "role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f4d4e7ba1240fe5f2c4be80d13" ON "team_members_roles" ("team_member_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_d28e1ffff7d6b7d3eb26253f9d" ON "team_members_roles" ("role_id") `);
        await queryRunner.query(`CREATE TABLE "users_tags" ("user_id" uuid NOT NULL, "tag_id" uuid NOT NULL, CONSTRAINT "PK_7f29e59d4fa87411d3fa79c5db4" PRIMARY KEY ("user_id", "tag_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_37fe67a713a33c9385ede5782d" ON "users_tags" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_ee316e71a670dca8d696490aee" ON "users_tags" ("tag_id") `);
        await queryRunner.query(`ALTER TABLE "user_profile" ADD CONSTRAINT "fk_profile_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_profile" ADD CONSTRAINT "fk_profile_photo_id" FOREIGN KEY ("avatar_id") REFERENCES "files"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_settings" ADD CONSTRAINT "fk_profile_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partner_profile" ADD CONSTRAINT "fk_profile_partner_id" FOREIGN KEY ("partner_id") REFERENCES "partners"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partner_profile" ADD CONSTRAINT "fk_profile_logo_id" FOREIGN KEY ("logo_id") REFERENCES "files"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partner_profile" ADD CONSTRAINT "fk_profile_banner_id" FOREIGN KEY ("banner_id") REFERENCES "files"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "followers" ADD CONSTRAINT "fk_followers_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "followers" ADD CONSTRAINT "fk_followers_partner_id" FOREIGN KEY ("partner_id") REFERENCES "partners"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "fk_reviews_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "fk_partner_user_id" FOREIGN KEY ("partner_id") REFERENCES "partners"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partner_settings" ADD CONSTRAINT "fk_settings_partner_id" FOREIGN KEY ("partner_id") REFERENCES "partners"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partners" ADD CONSTRAINT "fk_partner_profile_id" FOREIGN KEY ("profile_id") REFERENCES "partner_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partners" ADD CONSTRAINT "fk_partner_settings_id" FOREIGN KEY ("settings_id") REFERENCES "partner_settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscribers" ADD CONSTRAINT "fk_subscribers_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subscribers" ADD CONSTRAINT "fk_subscribers_partner_id" FOREIGN KEY ("partner_id") REFERENCES "partners"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_members" ADD CONSTRAINT "fk_team_member_tem_id" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_members" ADD CONSTRAINT "fk_team_member_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teams" ADD CONSTRAINT "FK_fde44edfeb831a0f12733b09383" FOREIGN KEY ("partner_id") REFERENCES "partners"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "fk_user_profile_id" FOREIGN KEY ("profile_id") REFERENCES "user_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "fk_user_settings_id" FOREIGN KEY ("settings_id") REFERENCES "user_settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "partners_tags" ADD CONSTRAINT "FK_0bb30eecfe3e109dd0c5fbfbc50" FOREIGN KEY ("partner_id") REFERENCES "partners"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "partners_tags" ADD CONSTRAINT "FK_a5dd1e5a6d76ed2607dd31b0e62" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "partners_owners" ADD CONSTRAINT "FK_2a67fee319e78de064f02103478" FOREIGN KEY ("partner_id") REFERENCES "partners"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "partners_owners" ADD CONSTRAINT "FK_35ba194e002c739c3caf41fdac4" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team_members_roles" ADD CONSTRAINT "fk_team_member_id" FOREIGN KEY ("team_member_id") REFERENCES "team_members"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "team_members_roles" ADD CONSTRAINT "fk_team_member_role_id" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_tags" ADD CONSTRAINT "FK_37fe67a713a33c9385ede5782df" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_tags" ADD CONSTRAINT "FK_ee316e71a670dca8d696490aeeb" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_tags" DROP CONSTRAINT "FK_ee316e71a670dca8d696490aeeb"`);
        await queryRunner.query(`ALTER TABLE "users_tags" DROP CONSTRAINT "FK_37fe67a713a33c9385ede5782df"`);
        await queryRunner.query(`ALTER TABLE "team_members_roles" DROP CONSTRAINT "fk_team_member_role_id"`);
        await queryRunner.query(`ALTER TABLE "team_members_roles" DROP CONSTRAINT "fk_team_member_id"`);
        await queryRunner.query(`ALTER TABLE "partners_owners" DROP CONSTRAINT "FK_35ba194e002c739c3caf41fdac4"`);
        await queryRunner.query(`ALTER TABLE "partners_owners" DROP CONSTRAINT "FK_2a67fee319e78de064f02103478"`);
        await queryRunner.query(`ALTER TABLE "partners_tags" DROP CONSTRAINT "FK_a5dd1e5a6d76ed2607dd31b0e62"`);
        await queryRunner.query(`ALTER TABLE "partners_tags" DROP CONSTRAINT "FK_0bb30eecfe3e109dd0c5fbfbc50"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "fk_user_settings_id"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "fk_user_profile_id"`);
        await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_fde44edfeb831a0f12733b09383"`);
        await queryRunner.query(`ALTER TABLE "team_members" DROP CONSTRAINT "fk_team_member_user_id"`);
        await queryRunner.query(`ALTER TABLE "team_members" DROP CONSTRAINT "fk_team_member_tem_id"`);
        await queryRunner.query(`ALTER TABLE "subscribers" DROP CONSTRAINT "fk_subscribers_partner_id"`);
        await queryRunner.query(`ALTER TABLE "subscribers" DROP CONSTRAINT "fk_subscribers_user_id"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP CONSTRAINT "fk_partner_settings_id"`);
        await queryRunner.query(`ALTER TABLE "partners" DROP CONSTRAINT "fk_partner_profile_id"`);
        await queryRunner.query(`ALTER TABLE "partner_settings" DROP CONSTRAINT "fk_settings_partner_id"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "fk_partner_user_id"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "fk_reviews_user_id"`);
        await queryRunner.query(`ALTER TABLE "followers" DROP CONSTRAINT "fk_followers_partner_id"`);
        await queryRunner.query(`ALTER TABLE "followers" DROP CONSTRAINT "fk_followers_user_id"`);
        await queryRunner.query(`ALTER TABLE "partner_profile" DROP CONSTRAINT "fk_profile_banner_id"`);
        await queryRunner.query(`ALTER TABLE "partner_profile" DROP CONSTRAINT "fk_profile_logo_id"`);
        await queryRunner.query(`ALTER TABLE "partner_profile" DROP CONSTRAINT "fk_profile_partner_id"`);
        await queryRunner.query(`ALTER TABLE "user_settings" DROP CONSTRAINT "fk_profile_user_id"`);
        await queryRunner.query(`ALTER TABLE "user_profile" DROP CONSTRAINT "fk_profile_photo_id"`);
        await queryRunner.query(`ALTER TABLE "user_profile" DROP CONSTRAINT "fk_profile_user_id"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ee316e71a670dca8d696490aee"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_37fe67a713a33c9385ede5782d"`);
        await queryRunner.query(`DROP TABLE "users_tags"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d28e1ffff7d6b7d3eb26253f9d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f4d4e7ba1240fe5f2c4be80d13"`);
        await queryRunner.query(`DROP TABLE "team_members_roles"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_35ba194e002c739c3caf41fdac"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2a67fee319e78de064f0210347"`);
        await queryRunner.query(`DROP TABLE "partners_owners"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a5dd1e5a6d76ed2607dd31b0e6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0bb30eecfe3e109dd0c5fbfbc5"`);
        await queryRunner.query(`DROP TABLE "partners_tags"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "teams"`);
        await queryRunner.query(`DROP TABLE "team_members"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "subscribers"`);
        await queryRunner.query(`DROP TABLE "partners"`);
        await queryRunner.query(`DROP TABLE "partner_settings"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "reviews"`);
        await queryRunner.query(`DROP TABLE "followers"`);
        await queryRunner.query(`DROP TABLE "partner_profile"`);
        await queryRunner.query(`DROP TYPE "public"."partner_profile_theme_enum"`);
        await queryRunner.query(`DROP TABLE "user_settings"`);
        await queryRunner.query(`DROP TYPE "public"."user_settings_locale_enum"`);
        await queryRunner.query(`DROP TYPE "public"."user_settings_theme_enum"`);
        await queryRunner.query(`DROP TABLE "user_profile"`);
        await queryRunner.query(`DROP TYPE "public"."user_profile_gender_enum"`);
        await queryRunner.query(`DROP TABLE "files"`);
    }

}
