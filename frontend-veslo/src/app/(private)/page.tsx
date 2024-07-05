'use server';

import { ROUTES } from "@/shared/constants/routes";
import { redirect } from "next/navigation";

export default async function OrdersPage() {
  redirect(ROUTES.ORDERS);
}
