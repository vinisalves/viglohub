import { RoleType } from "./role.type";
import { TeamType } from "./team.type";
import { UserType } from "./user.type";

export type TeamMemberType = {
  id: string;
  team: TeamType;
  members: UserType;
  roles: RoleType[];
};
