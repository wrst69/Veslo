'use client';

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/shared/ui/alert"
import { useSessionQuery } from '@/entities/session/session.queries';
import { ROUTES } from '@/shared/constants/routes';
import { FullPageSpinner } from '@/shared/ui/full-page-spinner';
import { useRouter } from 'next/navigation';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { isSuccess, isError, isPending, data } = useSessionQuery();
  
  if (isError) {
    router.replace(ROUTES.SIGN_IN);
  }

  if (data && data.role !== 'ADMIN') {
    return  <div className="flex h-screen justify-center items-center">
              <Alert variant="destructive" className="w-1/4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Ошибка</AlertTitle>
                <AlertDescription>
                  У Вас нет необходимых прав доступа
                </AlertDescription>
              </Alert>
            </div>     
  }

  return  <>
            {isPending && <FullPageSpinner/>}
            {isSuccess && children}
          </>
}
