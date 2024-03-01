import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/ui/sheet"

import { Button } from "@/shared/ui/button"
import { CreateOrderForm } from "./_ui/create-order-form"

export function CreateOrderSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="ml-auto">Добавить заявку</Button>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                <SheetTitle>Форма заявки</SheetTitle>
                <SheetDescription>
                    <CreateOrderForm className="" revalidatePagePath="/"/>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}