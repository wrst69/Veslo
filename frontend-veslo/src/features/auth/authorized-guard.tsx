"use client";

import { useSessionQuery } from "@/entities/session/queries";
import { ROUTES } from "@/shared/constants/routes";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthorizedGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { isSuccess, isError, isLoading } = useSessionQuery();
  
  useEffect(() => {
    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }
  })
  
  if (isLoading) {
    return <FullPageSpinner isLoading={isLoading}/>
  }

  return (
    <>
      {<FullPageSpinner isLoading={isLoading}/>}
      {isSuccess && children}
    </>
  );
}
