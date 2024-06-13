'use client';

import { Input } from "@/shared/ui/input";
import { ChangeEvent } from "react";

export default function NodeSearchField({
    onInput
} : {
    onInput: (element: ChangeEvent<HTMLInputElement>) => void
}) {
    return <Input className="mt-2 mb-4" type="text" placeholder="Введите адрес" onChange={onInput}/>;
}
