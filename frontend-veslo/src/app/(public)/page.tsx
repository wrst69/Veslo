"use client";

import { ROUTES } from "@/shared/constants/routes"
import { redirect } from "next/navigation";
import SignInPage from "../(auth)/auth/sign-in/page";
import { useSessionQuery } from "@/entities/session/queries";

export default function Home() {
    const { isSuccess } = useSessionQuery();

    if (isSuccess) {
        redirect(ROUTES.ORDERS);
    }
    
    return <SignInPage/>;
}
