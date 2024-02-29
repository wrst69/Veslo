import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/ui/sheet"

import { Button } from "@/shared/ui/button"

export function CreateOrderForm() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="ml-auto">Добавить заявку</Button>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                <SheetTitle>Форма заявки</SheetTitle>
                <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}