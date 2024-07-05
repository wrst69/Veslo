'use client';

import { useOrdersQuery } from "@/entities/order/_repositories/orders.queries";
import { columns } from "../model/table-columns";
import { OrdersTable } from "./orders-table/orders-table";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { OrderEntity } from "@/entities/order/_domain/types";

export function OrderList({
    selectedPoint
}: {
    selectedPoint
}) {
    const { data, isLoading } = useOrdersQuery();
    const orders: OrderEntity[] = data;

    if (isLoading) {
        return <FullPageSpinner isLoading={isLoading}/>
    }

    let filteredOrders: OrderEntity[] = orders;

    if (selectedPoint.currentNode) {
        filteredOrders = orders.filter(order => order.node.lersId === selectedPoint.currentNode.id);

        if (selectedPoint.currentMeasurePoint) {
            filteredOrders = filteredOrders.filter(order => order.measurePoint.lersId === selectedPoint.currentMeasurePoint.id);
        }
    }       
    
    return  <div className="container mt-1 max-h-screen">
                <OrdersTable columns={columns} data={filteredOrders}/>
            </div>        
}
