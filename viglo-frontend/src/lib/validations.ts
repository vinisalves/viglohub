export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const PassRegex = {
  // Regra: Pelo menos uma letra minúscula
  LOWERCASE: /^(?=.*[a-z])/,

  // Regra: Pelo menos um número
  NUMBER: /^(?=.*\d)/,

  // Regra: Pelo menos um caracter especial
  SPECIAL_CHAR: /^(?=.*[!@#$%^&*()_+])/,

  // Regra: Pelo menos uma letra maiúscula
  UPPERCASE: /^(?=.*[A-Z])/,

  // Regra: No mínimo 8 caracteres
  MIN_8: /^.{8,}$/,

  // Regra: No máximo 16 caracteres
  MAX_16: /^.{0,16}$/,
};

export const isPassValid = (pass: string): boolean =>
  Object.values(PassRegex).every((regEx) => regEx.test(pass));
