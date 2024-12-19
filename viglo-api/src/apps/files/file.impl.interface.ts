export interface FileImplInterface {
  upload(file: Express.Multer.File, filename: string): Promise<any>;
  get(fileKey: string): Promise<any>;
  generateUrl(fileKey: string): Promise<any>;
  delete(ileKey: string): Promise<any>;
}
