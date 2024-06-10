'use client';

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/shared/ui/resizable';
import { NodesList } from '@/widgets/order-work-place/nodes-list/_ui/nodes-list';
import { OrderList } from '@/widgets/order-work-place/orders-list/_ui/orders-list';
import { useState } from 'react';
  
export default function OrderWorkPlace() {
    const [selectedPoint, setSelectedPoint] = useState<any>({    //задать тип
        currentNode: undefined,
        currentMeasurePoint: undefined
    });
  
    return  <ResizablePanelGroup direction="horizontal" className="min-h-screen max-w-screen">
              <ResizablePanel defaultSize={28}>
                    <NodesList selectedPoint={selectedPoint} handlePointChange={setSelectedPoint}/>
              </ResizablePanel>  
              {/* <ResizableHandle  /> */}
              <ResizablePanel defaultSize={72}>
                    <OrderList selectedPoint={selectedPoint}/>
              </ResizablePanel>
            </ResizablePanelGroup>
}
