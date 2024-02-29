

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

import { ordersRepository } from "@/entities/order/_repositories/orders";
import { toast } from "sonner";
import { CreateOrderForm } from "@/features/create-order/create-order-form";

export function NodeItem({
    node,
    measurePoints,
    onPointChange
}:{
    measurePoints,
    node: NodeListElement,
    onPointChange
}) {

    //const [selectedPointId, setSelectedPointId] = useState(measurePoints[0]?.id);

    //const handleSelectPoint = (e) => setSelectedPointId(e);

    /* const handleAddOrderButtonClick = () => {
        ordersRepository.createOrder({
            nodeId: parseInt(node.id),
            measurePointId: parseInt(selectedPointId),
            status: "pending",
            cost: 10000
        });

        toast('Заявка успешно добавлена');
    }; */

    const handlePointChange = (e) => {
        onPointChange({
            currentNodeId: node.id,
            currentMeasurePointId: parseInt(e)
        });
    }

    return (   
                    <AccordionItem key={node.id} 
                        value={(node.id).toString()} 
                        className="
                        border border-gray-200 rounded-lg p-3 mb-2
                        data-[state=open]:border-2 data-[state=open]:border-black"          
                    >
                        <AccordionTrigger>{node.title}</AccordionTrigger>
                        <AccordionContent>
                                <Select onValueChange={handlePointChange}>
                                    <SelectTrigger className="m-1 w-[97%]">
                                        <SelectValue defaultValue={measurePoints[0]?.title} placeholder="Выберите точку учета" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {measurePoints?.map(point => {
                                            return <SelectItem value ={point.id} key={point.id}>{point.title}</SelectItem>
                                        })}
                                    </SelectContent>
                                </Select>
                                <div>Equipment 1</div>
                                <div>Equipment 2</div>
                                <CreateOrderForm/>
                        </AccordionContent>
                    </AccordionItem>
)};
