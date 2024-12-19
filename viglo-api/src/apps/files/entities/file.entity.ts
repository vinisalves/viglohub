import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Logger } from '@nestjs/common';
import { Exclude } from 'class-transformer';
import {
  AfterLoad,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';
import { PartnerEntity } from '../../partners/entities/partner.entity';

@Entity({ name: 'files' })
export class FileEntity extends SoftFieldsForEntities {
  constructor() {
    super();
  }

  @Exclude()
  private logger = new Logger(File.name);

  @Exclude()
  private fileStorage = new S3Client({
    endpoint: process.env.FILE_STORAGE_ENDEPOINT,
    region: process.env.FILE_STORAGE_REGION,
    credentials: {
      accessKeyId: process.env.FILE_STORAGE_ACESS_KEY,
      secretAccessKey: process.env.FILE_STORAGE_SECRET_KEY,
    },
  });

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Exclude()
  @Column()
  key: string;

  url: string;

  @AfterLoad()
  async loadPressignedUrl() {
    const getFileCmd = new GetObjectCommand({
      Bucket: process.env.FILE_STORAGE_BUCKET_NAME,
      Key: this.key,
    });
    const url = await getSignedUrl(this.fileStorage, getFileCmd).catch(
      (error) => {
        throw new Error(`FileStore - Failed generating url ${error.message} `);
      },
    );

    this.url = url;
  }
}
