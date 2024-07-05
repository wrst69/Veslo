'use client';

import { useRouter } from 'next/navigation';
import { useSessionQuery } from '@/entities/session/session.queries';
import { ROUTES } from '@/shared/constants/routes';
import { useEffect } from 'react';

export default function AuthorizedGuard({ children }: { children: React.ReactNode }) {
  const { isSuccess, isError, data } = useSessionQuery();
  
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }
  }, [isError])
  
  if (isSuccess && data) {
    return  <>{children}</>;
  }
  
  return null;
}
