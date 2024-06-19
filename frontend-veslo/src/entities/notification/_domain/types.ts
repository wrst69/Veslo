import { OrderId } from "@/entities/order/_domain/types";
import { NotificationType } from "./const";

export type NotificationId = number;

export type NotificationEntity = {
    id: NotificationId,
    createdAt: Date,
    type: NotificationType,
    isRead: boolean,
    orderId: OrderId
};
