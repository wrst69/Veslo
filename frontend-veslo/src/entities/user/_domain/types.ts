export type UserId = number;
export type Role = "admin" | "user" | "viewer";


/* export const ROLES: Record<Role, Role> = {
  ADMIN: "ADMIN",
  USER: "USER",
  VIEWER: "VIEWER",
}; */

export type UserEntity = {
  id: UserId;
  login: string | null;
  name: string | null;
  role: Role;
  image?: string | null;
};

export type SessionEntity = {
  user: {
    id: UserId;
    login?: string | null;
    name?: string| null;
    role: Role;
    image?: string | null;
    accessToken: string
  };
  expires: string;
};

// Projections

export type Profile = {
  login?: string | null;
  name?: string | null;
  image?: string | null;
}
