import { MeasurePointId, NodeId } from "@/entities/node/_domain/types";
import { UserId } from "@/sdsdsd/user/user";

export type OrderId = string;

export type OrderEntity = {
    id: OrderId,
    user: UserId,
    node: NodeId,
    measurePoint: MeasurePointId,
    
    status: "pending" | "processing" | "success" | "failed"

    cost: number,
};

