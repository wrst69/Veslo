import { ROLES, UserEntity } from "../_domain/types";
import { createId } from "@/shared/lib/id";
import { userRepository } from "../_repositories/user";

type CreateUser = {
  login?: string | null;
  name?: string | null;
  image?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
};

export class CreateUserUseCase {
  async exec(data: CreateUser) {
    const role = ROLES.USER;

    const user: UserEntity = {
      id: createId(),
      role,
      ...data,
    };

    return await userRepository.createUser(user);
  }
}

export const createUserUseCase = new CreateUserUseCase();
