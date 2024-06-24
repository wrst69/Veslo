import { UserId } from "@/entities/user/_domain/types";
import { NotificationId } from "./types";

export type SetNotificationIsReadDto = NotificationId;

export type SetAllNotificationsIsReadDto = UserId;

export type DeleteNotificationDto = NotificationId;
