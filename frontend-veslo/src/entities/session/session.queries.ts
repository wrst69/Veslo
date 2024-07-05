import { authRepository } from '@/features/auth/model/auth.repository';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const sessionKey = ['session'];

export const useSessionQuery = () => {
  return useQuery({
    queryKey: sessionKey,
    queryFn: () => authRepository.getSessionInfo(),
    retry: 0
  });
};

export const useResetSession = () => {
  const queryClient = useQueryClient();
  return () => queryClient.removeQueries({queryKey: sessionKey});
};
