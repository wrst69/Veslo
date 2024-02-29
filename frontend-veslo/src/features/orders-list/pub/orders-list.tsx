"use client";

import { columns } from "../model/table-columns";
import { DataTable } from "../ui/data-table";

export function OrderList({
    orders,
    nodes,
    measurePoints,
    selectedPoint
}: {
    orders,
    nodes,
    measurePoints,
    selectedPoint
}) {

    if (selectedPoint.currentNodeId) {
        console.log(selectedPoint.currentNodeId)
        const filteredOrders = orders.filter(order => order.nodeId === selectedPoint.currentNodeId)
        console.log(filteredOrders)

        return (
            <div className="container ">
                <DataTable columns={columns} data={filteredOrders}/>
            </div>
        )
    }     
}
