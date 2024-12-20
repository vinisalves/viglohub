import { FollowerType } from "./follower.type";
import { PartnerType } from "./partner.type";
import { ReviewType } from "./review.type";
import { SubscriberType } from "./subscriber.type";
import { TagType } from "./tag.type";
import { TeamType } from "./team.type";
import { UserProfileType } from "./user-profile.type";
import { UserSettingsType } from "./user-settings.type";

export type UserType = {
  id: string;
  email: string;
  password: string;
  refresh_token?: string;
  recover_pass_token?: string;
  user_gateway_id?: string;
  confirmation_code?: number;
  is_confirmed?: boolean;
  profile: UserProfileType;
  settings: UserSettingsType;
  subscriptions: SubscriberType[];
  follows: FollowerType[];
  reviews: ReviewType[];
  tags: TagType[];
  partners: PartnerType[];
  teams: TeamType[];
};
