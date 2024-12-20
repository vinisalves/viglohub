import { PartnerType } from "./partner.type";
import { UserType } from "./user.type";

export type FollowerType = {
  id: string;
  user: UserType;
  partner: PartnerType;
};
