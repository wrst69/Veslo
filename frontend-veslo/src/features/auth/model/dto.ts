import { Role } from "@/entities/user/_domain/const";

export interface AuthFormDataDto{
  login: string,
  password: string,
};

export interface GetSessionInfoDto {
	id: number;
	login: string;
	name: string;
	role: Role;
	iat: number;
	exp: number;
}
