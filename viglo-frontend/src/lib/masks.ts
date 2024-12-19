export type MaskFunctionType = (arg: string | number | boolean) => string;
export type MasksType = {
  [Key: string]: MaskFunctionType;
};

export type MasksKeysType = keyof typeof Masks;

export const Masks: MasksType = {
  CPF: (cpf: string | number | boolean): string => {
    if (typeof cpf !== "string") return "";
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4");
  },
  CEP: (cep: string | number | boolean): string => {
    if (typeof cep !== "string") return "";
    return cep.replace(/^(\d{5})(\d{3})/, "$1-$2");
  },
  CARD_NUMBER: (cardNumber: string | number | boolean): string => {
    if (typeof cardNumber !== "string") return "";
    return cardNumber
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .substring(0, 19);
  },
  TELEFONE_ANONIMO: (telefone: string | number | boolean): string => {
    if (typeof telefone !== "string") return "";
    const size = telefone.length;
    return (
      telefone.slice(0, 4) +
      telefone.slice(4, size - 4).replace(/\d/g, "*") +
      telefone.slice(size - 4)
    );
  },
  TELEFONE: (telefone: string | number | boolean): string => {
    if (typeof telefone !== "string") return "";
    const sanitized = telefone.replace(/\D/g, "").replace(/^0/, "");
    if (sanitized.length > 11) {
      return sanitized.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (sanitized.length > 7) {
      return sanitized.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (sanitized.length > 2) {
      return sanitized.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    }
    return sanitized ? `(${sanitized}` : "";
  },
  NUMBER_BRL: (num: string | number | boolean): string => {
    if (typeof num !== "number") return "0,00";
    return num.toFixed(2).replace(".", ",");
  },
  EXPIRATION_CARD_DATE: (value: string | number | boolean): string => {
    if (typeof value !== "string") return "";
    return value
      .replace(/\W/gi, "")
      .replace(/(.{2})/g, "$1/")
      .substring(0, 5);
  },
  CARD_TYPE: (cardNumber: string | number | boolean): string => {
    if (typeof cardNumber !== "string") return "creditcard";
    const cardTypes = [
      { regex: /^4/, type: "visa" },
      { regex: /^(34|37)/, type: "amex" },
      { regex: /^5[1-5]/, type: "mastercard" },
      { regex: /^6011/, type: "discover" },
      { regex: /^62/, type: "unionpay" },
      { regex: /^9792/, type: "troy" },
      { regex: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/, type: "dinersclub" },
      { regex: /^35(2[89]|[3-8])/, type: "jcb" },
    ];
    for (const { regex, type } of cardTypes) {
      if (cardNumber.match(regex)) return type;
    }
    return "creditcard";
  },
  DATE_BR: (date: string | number | boolean): string => {
    if (typeof date !== "string" || isNaN(Date.parse(date))) {
      return "Data inválida";
    }
    return date.split("T")[0].split("-").reverse().join("/");
  },
  HOUR_FROM_DATE: (date: string | number | boolean): string => {
    if (typeof date !== "string" || isNaN(Date.parse(date))) {
      return "Data inválida";
    }
    const time = date.split("T")[1];
    return time ? time.slice(0, 5) : "Data inválida";
  },
};
