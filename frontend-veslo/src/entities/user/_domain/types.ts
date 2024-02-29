export type UserId = string;
export type Role = "ADMIN" | "USER" | "VIEWER";

export const ROLES: Record<Role, Role> = {
  ADMIN: "ADMIN",
  USER: "USER",
  VIEWER: "VIEWER",
};

export type UserEntity = {
  id: UserId;
  login?: string | null;
  name?: string | null;
  role: Role;
  image?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
};

export type SessionEntity = {
  user: {
    id: UserId;
    login?: string | null;
    name?: string| null;
    role: Role;
    image?: string | null;
    email?: string | null;
  };
  expires: string;
};

// Projections

export type Profile = {
  login?: string | null;
  name?: string | null;
  image?: string | null;
}
