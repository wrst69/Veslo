'use client';

import { Dispatch, useState } from "react";
import NodeSearchField from "./search-field";
import { NodeItem } from "./node-item";
import { NodeGroupSelect } from "./node-group-select";
import { Accordion } from "@/shared/ui/accordion";
import { ScrollArea, ScrollBar } from "@/shared/ui/scroll-area";
import { useLersNodesQuery } from "@/entities/node/_repositories/nodes.queries";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";

export function NodesList({
    selectedPoint,
    handlePointChange
} : {
    selectedPoint,
    handlePointChange: Dispatch<any>
}) {
    const [selectedNodeGroup, setSelectedNodeGroup] = useState('all');
    const [searchText, setSearchText] = useState('');

    const { data, isLoading } = useLersNodesQuery();

    if (isLoading) {
        return <FullPageSpinner/>
    }

    const {nodeGroups, nodes, measurePoints, equipment } = data;

    const filteredData = nodes.filter((node) => {
        if (selectedNodeGroup === 'all') {
            if (searchText  === '') {
                return node;
            }
            
            return node.title.toLowerCase().includes(searchText);
        } else {
            const filteredNodeGroup = nodeGroups.find(e => e.nodeGroup.title === selectedNodeGroup);

            if (filteredNodeGroup.members.includes(node.id)) {
                if (searchText  === '') {
                    return node;
                }
                //return the item which contains the user input
                return node.title.toLowerCase().includes(searchText);
            }    
        }
    })

    let handleSearch = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchText(lowerCase);
    };

    const handleCardChange = (e) => {
        handlePointChange({currentNode: nodes.find(node => node.id === parseInt(e))});
    };

    return (
           <div className="flex h-full flex-col justify-top ml-4 mt-1">
                <NodeGroupSelect  nodeGroups={nodeGroups} onSelect={setSelectedNodeGroup}/>
                <NodeSearchField onInput={handleSearch}/> 
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
                                            onPointChange={handlePointChange}
                                        />
                                )})}
                            </Accordion>
                            <ScrollBar orientation="vertical" />
                            </ScrollArea>                           
            </div>           
    )
}
