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
            <SheetTrigger asChild>
                <Button className="ml-auto mt-1" disabled={!selectedPoint.currentMeasurePoint}>Добавить заявку</Button>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>Форма заявки</SheetTitle>
                    <CreateOrderForm selectedPoint={selectedPoint} setOpen={setOpen}/>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
