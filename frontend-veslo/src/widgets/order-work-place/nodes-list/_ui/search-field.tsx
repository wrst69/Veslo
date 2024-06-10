'use client';

import { Input } from "@/shared/ui/input";

export default function NodeSearchField({
    onInput
} : {
    onInput: (element: any) => void
}) {
    return <Input className="mt-2 mb-4 mr-4" type="text" placeholder="Введите адрес" onChange={onInput}/>;
}
