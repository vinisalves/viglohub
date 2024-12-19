import {
  DeleteObjectCommand,
  GetObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { FileImplInterface } from '../file.impl.interface';
import { Upload } from '@aws-sdk/lib-storage';
import { randomUUID } from 'crypto';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
export class AWSS3 implements FileImplInterface {
  private s3V3: S3Client;
  private bucketName = process.env.AWS_PRIVATE_BUCKET_NAME;

  constructor() {
    this.s3V3 = new S3Client({
      region: 'sa-east-1',
    });
  }
  /**
   * Upload a file to AWS S3
   * @param file
   * @param filename
   * @returns
   */
  async upload(file: Express.Multer.File, filename: string) {
    return await new Upload({
      client: this.s3V3,
      params: {
        Bucket: this.bucketName,
        Body: file.buffer,
        Key: `${filename}-${randomUUID()}`,
        ContentType: file.mimetype,
      },
    })
      .done()
      .catch((error) => {
        throw new Error(`AWS S3 - Failed uploading new file: ${error.message}`);
      });
  }

  /**
   * Get a file from AWS S3
   * @param fileKey
   * @returns
   */
  async get(fileKey: string) {
    const getFileCmd = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });

    return await this.s3V3.send(getFileCmd).catch((error) => {
      throw new Error(`AWS S3 - Failed to get file: ${error.message}`);
    });
  }

  /**
   * Generate a url to a file on AWS S3
   * @param fileKey
   * @returns
   */
  async generateUrl(fileKey: string): Promise<any> {
    const getFileCmd = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });
    return getSignedUrl(this.s3V3, getFileCmd).catch((error) => {
      throw new Error(`AWS S3 - Failed generating url ${error.message} `);
    });
  }

  /**
   * Delete a file from AWS S3
   * @param filekey
   * @returns
   */
  async delete(filekey: string) {
    const deleteCmd = new DeleteObjectCommand({
      Bucket: this.bucketName,
      Key: filekey,
    });

    return this.s3V3.send(deleteCmd).catch((error) => {
      throw new Error(`AWS S3 - Failed deleting file: ${error.message}`);
    });
  }
}
