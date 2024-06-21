import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/ui/sheet";
import { Button } from "@/shared/ui/button";
import { CreateOrderForm } from "./_ui/create-order-form";
import { useState } from "react";

export function CreateOrderSheet({
    selectedPoint
}:{
    selectedPoint
}) {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <Sheet open={isOpen} onOpenChange={setOpen}>  
            <div className="flex justify-center items-center">
                <SheetTrigger asChild>
                    <Button size={"lg"} className=" w-[96%] mt-2" disabled={!selectedPoint.currentMeasurePoint}>Добавить заявку</Button>
                </SheetTrigger>
            </div>             
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>Форма заявки</SheetTitle>
                    <CreateOrderForm selectedPoint={selectedPoint} setOpen={setOpen}/>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
