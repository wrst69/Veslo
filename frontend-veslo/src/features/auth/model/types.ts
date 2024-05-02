import { UserEntity } from "@/entities/user/_domain/types";

export interface IUser extends UserEntity {
};

export interface IAuthFormData extends Pick<IUser, 'login'>{
  password: string,
};
