import { useQuery } from "@tanstack/react-query";
import { usersRepository } from "./users.repository";

export const usersKey = ['users'];

export const useUsersQuery = () => {
  return useQuery({
    queryKey: usersKey,
    queryFn: () => usersRepository.getUsersList()
  })
}
