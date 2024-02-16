"use server";

import { revalidatePath } from "next/cache";
import { ordersRepository } from "./orders.repository";

export const createOrdersAction = async (
    command: CreateOrderListElementCommand,
    revalidatePagePath: string,
) => {

    await ordersRepository.createOrderElement(command);
    revalidatePath(revalidatePagePath)
};
