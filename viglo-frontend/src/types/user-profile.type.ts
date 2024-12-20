import { USER_GENDER_ENUM } from "@/enums/user-gender.enum";
import { UserType } from "./user.type";
import { FileType } from "./file.type";

export type UserProfileType = {
  id: string;
  user: UserType;
  first_name: string;
  last_name: string;
  street?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  complement?: string;
  phone: string;
  gender?: USER_GENDER_ENUM;
  gender_other_description?: string;
  birth_date?: Date;
  photo?: FileType;
};
