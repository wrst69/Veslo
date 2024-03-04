"use client";

import { NodesList } from "@/features/nodes-list/pub/nodes-list";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/shared/ui/resizable"

import { useState } from "react";
import { EquipmentItem } from "./test-equipment-item";

export function TestComponent({
    nodeGroups,
    nodes,
    equipment,
    measurePoints

}: {
    nodeGroups,
    nodes,
    equipment,
    measurePoints
}) {

    const [selectedPoint, setSelectedPoint] = useState({
        currentNodeId: undefined,
        currentMeasurePointId: undefined
    });
    
    const filterEquipment = () => {
        const currentNodeEquipment = equipment.nodeEquipment.filter(equip => equip.nodeId === selectedPoint.currentNodeId);

        const currentNodeEquipmentId = currentNodeEquipment.map(equip => equip.equipmentId);

        const equip = equipment.list.filter(equip => currentNodeEquipmentId.find(id => equip.id === id));
        
        equip.map(item => {    
            const model = equipment.modelList.find(model => item.equipmentModelId === model.id);
            
            item.nodeTitle = model.title
            item.calibrationInterval = model.calibrationInterval
        })

        return equip;
    }

    return (
        <ResizablePanelGroup direction="horizontal" className="min-h-screen max-w-screen">
            <ResizablePanel defaultSize={35}>
                    <NodesList 
                        nodeGroups={nodeGroups} 
                        nodes={nodes} 
                        measurePoints={measurePoints}
                        onPointChange={setSelectedPoint}
                    />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={65}>
                    {selectedPoint && filterEquipment().map(item => <EquipmentItem key={item.id} equipment={item}/>)}
            </ResizablePanel>
        </ResizablePanelGroup> 
    )
}
