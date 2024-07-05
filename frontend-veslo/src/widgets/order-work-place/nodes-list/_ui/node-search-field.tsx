'use client';

import { Input } from "@/shared/ui/input";
import { Search } from "lucide-react";
import { ChangeEvent } from "react";

export default function NodeSearchField({
    onInput
} : {
    onInput: (element: ChangeEvent<HTMLInputElement>) => void
}) {
    return  <div className="relative mt-2 mb-4">
                <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground"/>
                <Input type="text" placeholder="Введите адрес..." className="pl-10 w-full" onChange={onInput}/>
            </div>          
}
