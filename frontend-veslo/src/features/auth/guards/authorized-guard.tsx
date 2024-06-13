'use client';

import { useSessionQuery } from '@/entities/session/session.queries';
import { ROUTES } from '@/shared/constants/routes';
import { FullPageSpinner } from '@/shared/ui/full-page-spinner';
import { useRouter } from 'next/navigation';

export default function AuthorizedGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { isSuccess, isError, isLoading } = useSessionQuery();
  
  if (isError) {
    router.replace(ROUTES.SIGN_IN);
  }

  return  <>
            {isLoading && <FullPageSpinner isLoading={isLoading}/>}
            {isSuccess && children}
          </>
}
