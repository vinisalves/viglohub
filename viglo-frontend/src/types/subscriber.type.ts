import { PartnerType } from "./partner.type";
import { UserType } from "./user.type";

export type SubscriberType = {
  id: string;
  user: UserType;
  partner: PartnerType;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
};
