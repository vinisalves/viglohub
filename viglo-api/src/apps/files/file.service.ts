import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FileEntity } from './entities/file.entity';

import { FILE_SERVICE_PROVIDER } from './file.constants';
import { FileImplInterface } from './file.impl.interface';
import { Injectable, Inject } from '@nestjs/common';

import { PartnerEntity } from '../partners/entities/partner.entity';
import { UserEntity } from '../users/entities/user.entity';
@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private fileRepository: Repository<FileEntity>,
    @Inject(FILE_SERVICE_PROVIDER)
    private readonly fileServiceProvider: FileImplInterface,
  ) {}

  /**
   * Faz o upload de um arquivo no serviço
   * S3 da amazon e salva a referência do arquivo no
   * banco de dados
   * @param file
   * @param filename
   * @param userId
   * @param isPublic
   * @param companyId
   * @returns {Promise<File | BadRequestException>}
   */
  async uploadFile(
    file: Express.Multer.File,
    filename: string,
    ownerType: 'User' | 'Partner',
    userOrPartner: UserEntity | PartnerEntity,
  ): Promise<FileEntity> {
    if (!userOrPartner) throw new Error('Usuário inválido');

    const uploadedFile = await this.fileServiceProvider.upload(file, filename);
    const uploadOptions = {
      key: uploadedFile.Key,
      ownerType,
      userOwner: ownerType === 'User' ? userOrPartner : undefined,
      partnerOwner: ownerType === 'Partner' ? userOrPartner : undefined,
    };
    const newFile = this.fileRepository.create(uploadOptions);

    return this.fileRepository.save(newFile);
  }

  /**
   * Retorna um objecto contendo o conteúdo do arquivo na S3
   *
   * @param file
   * @returns {Promise<PromiseResult<S3.GetObjectOutput, AWSError>>}
   */
  async getFile(file: FileEntity): Promise<any> {
    const fileFromDb = await this.fileRepository.findOne({
      where: { key: file.key },
    });
    if (!fileFromDb) throw new Error('Arquivo não encontrado');

    return this.fileServiceProvider.get(fileFromDb.key);
  }

  /**
   * Gera um link de acesso termporário
   * a um arquivo hospedado na amazon S3
   * @param id
   * @returns {Promise<false | string>}
   */
  public async generatePresignedUrl(id: string): Promise<false | string> {
    const fileFromDb = await this.fileRepository.findOne({
      where: { id },
    });
    if (!fileFromDb) throw new Error('Arquivo não encontrado');

    return this.fileServiceProvider.generateUrl(fileFromDb.key);
  }

  /**
   * Deleta um arquivo hospedado na amazon S3
   * e realiza um softdelete no repositório de File
   * @param fileId
   * @returns {Promise<UpdateResult>}
   */

  async deleteFile(fileId: string): Promise<any> {
    try {
      const file = await this.fileRepository.findOne({
        where: { id: fileId },
      });

      if (!file) throw new Error('Empresa informada não encontrada');
      await this.fileServiceProvider.delete(file.key);
      await this.fileRepository.softDelete(fileId);
      return 'File deleted';
    } catch (error) {
      throw new Error('cant delete file:' + error.message);
    }
  }
}
