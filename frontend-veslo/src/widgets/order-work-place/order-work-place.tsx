"use client"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/shared/ui/resizable"

import { NodesList } from "@/features/nodes-list/pub/nodes-list";
import { OrderList } from "@/features/orders-list/pub/orders-list";
import { useState } from "react";
  
export default function OrderWorkPlace({
    orders,
    nodeGroups,
    nodes,
    measurePoints,
    equipment
  }: {
    orders,
    nodeGroups,
    nodes,
    measurePoints,
    equipment
  }) {
  
    const [selectedPoint, setSelectedPoint] = useState({
        currentNodeId: undefined,
        currentMeasurePointId: undefined
    });
  
    return (
        <ResizablePanelGroup direction="horizontal" className="min-h-screen max-w-screen">
          <ResizablePanel defaultSize={35}>
                <NodesList 
                    nodes={nodes}
                    nodeGroups={nodeGroups}
                    measurePoints={measurePoints}
                    equipment={equipment}
                    revalidatePagePath="/"
                    onPointChange={setSelectedPoint}
                />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={65}>
                <OrderList 
                    orders={orders}
                    selectedPoint={selectedPoint}
                />
          </ResizablePanel>
        </ResizablePanelGroup>  
    );
  }
