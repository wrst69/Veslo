"use server";

import { redirect, useRouter } from "next/navigation";
import { useSessionQuery } from "@/entities/session/session.queries";
import { useEffect } from "react";
import { ROUTES } from "@/shared/constants/routes"

export default async function Home() {
    //const router = useRouter();

    //const { isSuccess, isError } = useSessionQuery();

    /* useEffect(() => {
        if (isSuccess) {
            router.replace(ROUTES.ORDERS, { scroll: false });
        }

        if (isError) {
            router.replace(ROUTES.SIGN_IN, { scroll: false })
        }
    } ,[isSuccess, router]) */
     redirect(ROUTES.ORDERS)
}
