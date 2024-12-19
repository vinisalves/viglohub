import { randomBytes, pbkdf2Sync } from 'crypto';
const secretSaltHash = process.env.SECRET_SALT_HASH;

/**
 * Gerar uma sequencia randomica de bytes em hexadecimal
 * @returns string
 */
// export const generateSalt = (): string => {
//   const HASH_SALT = +process.env.SECRET_HASH_SALT;
//   return randomBytes(HASH_SALT).toString('hex');
// };
/**
 * Gera hash atraves de um secret e um salt
 * @param secret
 * @param salt
 * @returns string
 */
export const generateHash = (secret: string): string => {
  return pbkdf2Sync(secret, secretSaltHash, 1000, 64, 'sha512').toString('hex');
};
/**
 * Gera um hash atrave de um secret e um salt e compara
 * com o hash enviado
 * @param secret
 * @param storedHash
 * @param storedSalt
 * @returns boolean
 */
export const compareHash = (secret: string, storedHash: string): boolean => {
  const hash = generateHash(secret);
  return hash === storedHash;
};
