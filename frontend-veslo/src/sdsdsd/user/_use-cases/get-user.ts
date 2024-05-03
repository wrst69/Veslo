import { AuthorizationError } from "@/shared/lib/errors";
import { SessionEntity, UserEntity, UserId } from "../_domain/types";
import { createUserAbility } from "../_domain/ability";
import { userRepository } from "../_repositories/user";

type GetUser = {
  userId: UserId;
  session: SessionEntity;
};

export class GetUserUseCase {
  async exec({ userId, session}: GetUser): Promise<UserEntity> {
    const userAbility = createUserAbility(session)

    if (!userAbility.canGetProfile(userId)) {
        throw new AuthorizationError();
    }

    return await userRepository.getUserById(userId);
  }
}

export const getUserUseCase = new GetUserUseCase();
