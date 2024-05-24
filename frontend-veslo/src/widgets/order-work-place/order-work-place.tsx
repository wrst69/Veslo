'use client';

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/shared/ui/resizable"
import { NodesList } from "@/widgets/order-work-place/nodes-list/pub/nodes-list";
import { OrderList } from "@/widgets/order-work-place/orders-list/_ui/orders-list";
import { useState } from "react";
  
export default function OrderWorkPlace({
    nodeGroups,
    nodes,
    measurePoints
  }: {
    nodeGroups,
    nodes,
    measurePoints
    
  }) {
    
    const [selectedPoint, setSelectedPoint] = useState<any>({
        currentNode: undefined,
        currentMeasurePoint: undefined
    });
  
    return (
        <ResizablePanelGroup direction="horizontal" className="min-h-screen max-w-screen">
          <ResizablePanel defaultSize={28}>
                <NodesList 
                    nodes={nodes}
                    nodeGroups={nodeGroups}
                    measurePoints={measurePoints}
                    selectedPoint={selectedPoint}
                    onPointChange={setSelectedPoint}
                />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={72}>
                <OrderList selectedPoint={selectedPoint}/>
          </ResizablePanel>
        </ResizablePanelGroup>  
    );
  }
