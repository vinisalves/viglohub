import { THEME_ENUM } from "@/enums/theme.enum";
import { FileType } from "./file.type";
import { PartnerType } from "./partner.type";

export type PartnerProfileType = {
  id: string;
  name: string;
  description: string;
  category: string;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  complement?: string;
  phone: string;
  theme: THEME_ENUM;
  partner: PartnerType;
  logo?: FileType;
  banner?: FileType;
};
