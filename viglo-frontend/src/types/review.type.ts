import { PartnerType } from "./partner.type";
import { UserType } from "./user.type";

export type ReviewType = {
  id: string;
  user: UserType;
  partner: PartnerType;
  stars: number;
  comment: string;
};
