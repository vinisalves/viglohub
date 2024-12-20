import { STATUS_PARTNER } from "@/enums/status-partner.enum";
import { PartnerProfileType } from "./partner-profile.type";
import { PartnerSettingsType } from "./partner-settings.type";
import { UserType } from "./user.type";
import { FollowerType } from "./follower.type";
import { SubscriberType } from "./subscriber.type";
import { TagType } from "./tag.type";
import { TeamType } from "./team.type";
import { ReviewType } from "./review.type";

export type PartnerType = {
  id: string;
  status: STATUS_PARTNER;
  legal_name: string;
  business_id: string;
  confirmation_code?: number;
  profile: PartnerProfileType;
  settings: PartnerSettingsType;
  subscribers: SubscriberType[];
  followers: FollowerType[];
  reviews: ReviewType[];
  tags: TagType[];
  owners: UserType[];
  teams: TeamType[];
};
