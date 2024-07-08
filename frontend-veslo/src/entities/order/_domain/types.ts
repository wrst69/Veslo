import { UserId } from "@/entities/user/_domain/types";
import { OrderStatus, OrderType } from "./const";

export type OrderId = number;

export type OrderCommentId = number;

export type OrderComment = {
    id: OrderCommentId,
    owner: UserId,
    description: string
};

export type OrderEntity = {
    id: OrderId,
    createdAt: string,
    updatedAt: string,
    description: string,
    type: OrderType,
    status: OrderStatus,
    owner: {
        id: UserId,
        name: string,
    },
    recipient: UserId,
    node: {
        lersId: number,
    },
    measurePoint: {
        lersId: number,
        title: string,
    }    
    /* comments: OrderComment[]

    cost: number,  */ //maybe nenado
};

export type OrderCounts = {
    all: number,
    pending: number,
    processing: number,
    success: number,
    failed: number
};

export { OrderType, OrderStatus };
