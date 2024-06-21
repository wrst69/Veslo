'use client';

import { useRouter } from 'next/navigation';
import { useSessionQuery } from '@/entities/session/session.queries';
import { FullPageSpinner } from '@/shared/ui/full-page-spinner';
import { ROUTES } from '@/shared/constants/routes';

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
