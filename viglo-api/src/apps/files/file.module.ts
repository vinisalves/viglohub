import { Global, Module } from '@nestjs/common';
import { FileService } from './file.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';

import { FILE_SERVICE_PROVIDER } from './file.constants';
import { DigitalOceanSpaces } from './implementations/digitalOcean-spaces';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  controllers: [],
  providers: [
    FileService,
    {
      provide: FILE_SERVICE_PROVIDER,
      useClass: DigitalOceanSpaces,
    },
  ],
  exports: [FileService],
})
export class FileModule {}
