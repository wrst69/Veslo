'use client';

import NodeSearchField from "./search-field";
import { useState } from "react";
import { NodeItem } from "./node-item";
import { NodeGroupSelect } from "./node-group-select";
import { Accordion } from "@/shared/ui/accordion";
import { ScrollArea, ScrollBar } from "@/shared/ui/scroll-area";

export function NodesList({
    nodes,
    nodeGroups,
    measurePoints,
    selectedPoint,
    onPointChange
} : {
    nodes,
    nodeGroups,
    measurePoints,
    selectedPoint,
    onPointChange?
}) {

    const [selectedNodeGroup, setSelectedNodeGroup] = useState('all');
    const [inputedText, setInputedText] = useState('');

    let inputHandler = (element) => {
        var lowerCase = element.target.value.toLowerCase();
        setInputedText(lowerCase);
    };

    const filteredData = nodes.filter((node) => {
        if (selectedNodeGroup === 'all') {
            if (inputedText  === '') {
                return node;
            }
            
            return node.title.toLowerCase().includes(inputedText);
        } else {
            const filteredNodeGroup = nodeGroups.find(e => e.nodeGroup.title === selectedNodeGroup);

            if (filteredNodeGroup.members.includes(node.id)) {
                if (inputedText  === '') {
                    return node;
                }
                //return the item which contains the user input
                return node.title.toLowerCase().includes(inputedText);
            }    
        }
    })

    const handleCardChange = (e) => {
        onPointChange({currentNode: nodes.find(node => node.id === parseInt(e))});
    };

    return (
           <div className="flex h-full flex-col justify-top ml-4 mt-1">
                <NodeGroupSelect  nodeGroups={nodeGroups} onSelect={setSelectedNodeGroup}/>
                <NodeSearchField onInput={inputHandler}/> 
                    {/* <div className="flex flex-col gap-3 scroll-smooth overflow-y-auto h-screen"> */}
                            <ScrollArea className="flex flex-col gap-3 scroll-smooth h-screen">
                            <Accordion type="single" collapsible onValueChange={handleCardChange}>
                                {filteredData.map(node => {
                                    const filteredMeasurePoints = measurePoints.filter(point => point.nodeId === node.id);
                                    
                                    return (
                                        <NodeItem
                                            key={node.id}
                                            node={node}
                                            measurePoints={filteredMeasurePoints}
                                            selectedPoint={selectedPoint}
                                            onPointChange={onPointChange}
                                        />
                                )})}
                            </Accordion>
                            <ScrollBar orientation="vertical" />
                            </ScrollArea>                          
                    {/* </div> */}      
            </div>           
    )
}
