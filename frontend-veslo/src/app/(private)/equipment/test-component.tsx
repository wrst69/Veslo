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
    
    //{nodeId, equipmentId}
    //{id, equipmentModelId, serialNumber }
    //{id, title, longTitle }

    const filterEquipment = () => {
        const nodeEquipment = equipment.nodeEquipment.filter(equip => equip.nodeId === selectedPoint.currentNodeId);

        const cleanEquipmentId = nodeEquipment.map(equip => equip.equipmentId);

        const equip = equipment.list.filter(equip => cleanEquipmentId.find(id => equip.id === id));

        const modelsId = equipment.modelList.map(e => e.id);
    

        equip.map(equip => {
            

            //console.log(modelsId)  
            //console.log(equipment.modelList.includes(equip.id));
            console.log(equipment.modelList.filter(item => {
                
                item.id === equip.equipmentModelId;
            }));  
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
