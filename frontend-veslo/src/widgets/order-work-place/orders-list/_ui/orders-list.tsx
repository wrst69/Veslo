'use client';

import { useOrdersQuery } from "@/entities/order/_repositories/orders.queries";
import { columns } from "../model/table-columns";
import { OrdersTable } from "./orders-table/orders-table";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { SelectedPoint } from "@/entities/selected-point/_domain/types";

export function OrderList({
    selectedPoint
}: {
    selectedPoint: SelectedPoint
}) {
    const { data: orders, isPending } = useOrdersQuery();

    if (isPending) {
        return <FullPageSpinner/>
    }

    let filteredOrders = orders;

    if (selectedPoint.currentNode) {
        filteredOrders = orders?.filter(order => order.node.lersId === selectedPoint.currentNode?.id);

        if (selectedPoint.currentMeasurePoint) {
            filteredOrders = filteredOrders?.filter(order => order.measurePoint.lersId === selectedPoint.currentMeasurePoint?.id);
        }
    }       
    
    return  <div className="container mt-1 max-h-screen">
                {filteredOrders ? <OrdersTable columns={columns} data={filteredOrders}/> : <OrdersTable columns={columns} data={[]}/>}
            </div>        
}
