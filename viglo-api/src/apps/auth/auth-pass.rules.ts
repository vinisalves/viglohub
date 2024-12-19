export const PassRegex = {
  LOWERCASE: /^(?=.*[a-z])/,
  NUMBER: /^(?=.*\d)/,
  SPECIAL_CHAR: /^(?=.*[!@#$%^&*()_+])/,
  UPPERCASE: /^(?=.*[A-Z])/,
  MIN_8: /^.{8,}$/,
  MAX_16: /^.{0,16}$/,
};
