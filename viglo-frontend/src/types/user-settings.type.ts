import { LOCALE_ENUM } from "@/enums/locale.enum";
import { THEME_ENUM } from "@/enums/theme.enum";
import { UserType } from "./user.type";

export type UserSettingsType = {
  id: string;
  user: UserType;
  theme: THEME_ENUM;
  locale: LOCALE_ENUM;
};
