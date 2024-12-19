import {
  DeleteObjectCommand,
  GetObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { FileImplInterface } from '../file.impl.interface';

import { Upload } from '@aws-sdk/lib-storage';
import { randomUUID } from 'crypto';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
export class DigitalOceanSpaces implements FileImplInterface {
  private s3V3: S3Client;
  private bucketName = process.env.DIGITAL_OCEAN_PRIVATE_BUCKET_NAME;

  constructor() {
    this.s3V3 = new S3Client({
      endpoint: process.env.FILE_STORAGE_ENDEPOINT,
      region: process.env.FILE_STORAGE_REGION,
      credentials: {
        accessKeyId: process.env.FILE_STORAGE_ACESS_KEY,
        secretAccessKey: process.env.FILE_STORAGE_SECRET_KEY,
      },
    });
  }
  /**
   * Upload a file to Digital Ocean Spaces
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
        throw new Error(
          `Digital Ocean Spaces - Failed uploading new file: ${error.message}`,
        );
      });
  }

  /**
   * Get a file from Digital Ocean Spaces
   * @param fileKey
   * @returns
   */
  async get(fileKey: string) {
    const getFileCmd = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });

    return await this.s3V3.send(getFileCmd).catch((error) => {
      throw new Error(
        `Digital Ocean Spaces - Failed to get file: ${error.message}`,
      );
    });
  }

  /**
   * Generate a url to a file on Digital Ocean Spaces
   * @param fileKey
   * @returns
   */
  async generateUrl(fileKey: string): Promise<any> {
    const getFileCmd = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: fileKey,
    });
    return getSignedUrl(this.s3V3, getFileCmd).catch((error) => {
      throw new Error(
        `Digital Ocean Spaces - Failed generating url ${error.message} `,
      );
    });
  }

  /**
   * Delete a file from Digital Ocean Spaces
   * @param filekey
   * @returns
   */
  async delete(filekey: string) {
    const deleteCmd = new DeleteObjectCommand({
      Bucket: this.bucketName,
      Key: filekey,
    });

    return this.s3V3.send(deleteCmd).catch((error) => {
      throw new Error(
        `Digital Ocean Spaces - Failed deleting file: ${error.message}`,
      );
    });
  }
}
