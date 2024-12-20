import { TeamMemberType } from "./team-member.type";

export type RoleType = {
  id: string;
  role: string;
  team_members: TeamMemberType[];
};
