import { Role } from "./const";

export type UserId = number;

export type UserEntity = {
  id: UserId;
  name: string | null;
  role: Role;
  image?: string | null;
};
