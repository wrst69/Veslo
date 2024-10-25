'use client';

import { ChangeEvent, Dispatch, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import NodeSearchField from "./_ui/node-search-field";
import { NodeItem } from "./_ui/node-item";
import { NodeGroupSelect } from "./_ui/node-group-select";
import { Accordion } from "@/shared/ui/accordion";
import { ScrollArea, ScrollBar } from "@/shared/ui/scroll-area";
import { useLersNodesQuery } from "@/entities/node/_repositories/nodes.queries";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { SelectedPoint } from "@/entities/selected-point/_domain/types";
import { Node } from "@/entities/node/_domain/types";

export function NodesList({
    selectedPoint,
    handlePointChange
} : {
    selectedPoint: SelectedPoint,
    handlePointChange: Dispatch<SelectedPoint>
}) {
    const [selectedNodeGroup, setSelectedNodeGroup] = useState('all');
    const [searchText, setSearchText] = useState('');

    const [listItemsAmount, setListItemsAmount] = useState<number>(14);

    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            setListItemsAmount(prevState => prevState + 14);
        }
    }, [inView])
    
    const { data, isLoading } = useLersNodesQuery();

    if (isLoading) {
        return <FullPageSpinner/>
    }
        
    const {nodeGroups, nodes, measurePoints } = data;

    const filteredData = nodes.filter((node: Node) => {
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
 
    let handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchText(lowerCase);
        setListItemsAmount(14);
    };

    const handleCardChange = (value: string) => {
        handlePointChange({currentNode: nodes.find(node => node.id === parseInt(value))});
    };
    
    const handleNodeGroupChange = (value: string) => {
        setSelectedNodeGroup(value);
        setListItemsAmount(14);
    }

    return <div className="flex h-full flex-col justify-top ml-4 mt-1 mr-1" id="scrollArea">
                <NodeGroupSelect nodeGroups={nodeGroups} onSelect={handleNodeGroupChange}/>
                <NodeSearchField onInput={handleSearch}/> 
                <ScrollArea  className="flex flex-col gap-3 scroll-smooth h-screen" >
                    <Accordion type="single" collapsible onValueChange={handleCardChange}>
                        {filteredData.map((node, index: number) => {
                            if (index < listItemsAmount) {
                                const filteredMeasurePoints = measurePoints.filter(point => point.nodeId === node.id);

                                if (index === listItemsAmount - 1) {
                                    return  <div ref={ref} key={node.id}>
                                                <NodeItem         
                                                key={node.id}
                                                node={node}
                                                measurePoints={filteredMeasurePoints}
                                                selectedPoint={selectedPoint}
                                                onPointChange={handlePointChange} 
                                                /> 
                                            </div>
                                }
                                
                                return <NodeItem
                                        key={node.id}
                                        node={node}
                                        measurePoints={filteredMeasurePoints}
                                        selectedPoint={selectedPoint}
                                        onPointChange={handlePointChange}
                                        />
                            }
                                        
                        })}    
                    </Accordion>
                    <ScrollBar orientation="vertical" />
                </ScrollArea>                           
            </div>                  
}
