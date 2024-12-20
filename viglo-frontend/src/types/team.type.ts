import { PartnerType } from "./partner.type";
import { TeamMemberType } from "./team-member.type";

export type TeamType = {
  id: string;
  name: string;
  partner: PartnerType;
  members: TeamMemberType[];
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
};
