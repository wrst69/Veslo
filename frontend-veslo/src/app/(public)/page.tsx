"use client";

import { ROUTES } from "@/shared/constants/routes"
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { redirect } from "next/navigation";
import SignInPage from "../(auth)/auth/sign-in/page";
import { useSessionQuery } from "@/entities/session/queries";

export default function Home() {
    const { isLoading, isSuccess } = useSessionQuery();

    if (isLoading) {
        return <FullPageSpinner isLoading={ isLoading }/>;
    }

    if (isSuccess) {
        redirect(ROUTES.ORDERS);
    }
    
    return <SignInPage/>;
}
