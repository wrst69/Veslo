"use client";

import NodeSearchField from "../ui/search-field";
import { useState } from "react";
import { NodeItem } from "../ui/node-item";
import { NodeGroupSelect } from "../ui/node-group-select";
import { Accordion } from "@/shared/ui/accordion";

export function NodesList({
    nodes,
    nodeGroups,
    measurePoints,
    equipment,
    revalidatePagePath,
    onPointChange
} : {
    nodes,
    nodeGroups,
    measurePoints,
    equipment,
    revalidatePagePath?: string,
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
        onPointChange({currentNodeId: parseInt(e)});
    };

    return (
           <div className="flex h-full flex-col justify-top ml-4 mr-3 ">
                <NodeGroupSelect nodeGroups={nodeGroups} onSelect={setSelectedNodeGroup}/>
                <NodeSearchField onInput={inputHandler}/> 
                    <div className="flex flex-col gap-3 scroll-smooth">
                            <Accordion type="single" collapsible onValueChange={handleCardChange}>
                                {filteredData.map(node => {
                                    const filteredMeasurePoints = measurePoints.filter(point => point.nodeId === node.id);

                                    return (
                                        <NodeItem
                                            key={node.id}
                                            node={node}
                                            measurePoints={filteredMeasurePoints}
                                            onPointChange={onPointChange}
                                        />
                                )})}
                            </Accordion>                           
                    </div>         
            </div>           
    )
}
