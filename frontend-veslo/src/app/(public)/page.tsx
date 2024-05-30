"use client";

import { useRouter } from "next/navigation";
import { useSessionQuery } from "@/entities/session/queries";
import { useEffect } from "react";
import { ROUTES } from "@/shared/constants/routes"

export default function Home() {
    const router = useRouter();

    const { isSuccess } = useSessionQuery();

    useEffect(() => {
        if (isSuccess) {
            router.replace(ROUTES.ORDERS, { scroll: false});
        } else {
            router.replace(ROUTES.SIGN_IN, { scroll: false});
        }
    } ,[isSuccess, router])
}
