"use client";

import { columns } from "../model/table-columns";
import { DataTable } from "../ui/data-table";

export function OrderList({
    orders,
    selectedPoint
}: {
    orders,
    selectedPoint
}) {

    if (selectedPoint.currentNodeId) {
        let filteredOrders = orders.filter(order => order.nodeId === selectedPoint.currentNodeId);

    if (selectedPoint.currentMeasurePointId) {
        filteredOrders = filteredOrders.filter(order => order.measurePointId === selectedPoint.currentMeasurePointId);
    }

    return (
         <div className="container ">
            <DataTable columns={columns} data={filteredOrders}/>
        </div>
    )}     
}
