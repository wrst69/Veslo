import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/ui/select";
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/ui/accordion"
import { CreateOrderSheet } from "@/features/create-order/create-order-sheet";
import { ZodNumberDef } from "zod";

export function NodeItem({
    id,
    node,
    measurePoints,
    selectedPoint,
    onPointChange
}:{
    id?: string,
    node,
    measurePoints,
    selectedPoint,
    onPointChange
}) {

    const handlePointChange = (value: string) => {
        onPointChange({
            currentNode: node,
            currentMeasurePoint: measurePoints.find(point => point.id === parseInt(value)),
        });
    }

    return (   
        <AccordionItem
            id={id}
            key={node.id} 
            value={node.id.toString()}
            className="
            border border-gray-200 rounded-lg p-2 mb-2 mr-4
            data-[state=open]:border-2 data-[state=open]:border-black"          
        >   
             <AccordionTrigger>{node.title}</AccordionTrigger>
                <AccordionContent>
                    <Select onValueChange={handlePointChange}>
                        <SelectTrigger className="m-1 w-[97%]">
                            <SelectValue defaultValue="all" placeholder="Выберите точку учета" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Все</SelectItem>
                                {measurePoints?.map(point => <SelectItem value ={point.id.toString()} key={point.id}>{point.title}</SelectItem>)}
                            </SelectContent>
                    </Select>             
                    <CreateOrderSheet selectedPoint={selectedPoint}/>
                </AccordionContent>
        </AccordionItem>
)};
