"use client";
import { useTransition } from "react";
import { Button } from "@/shared/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/shared/ui/card"

export function OrderItem({
    order,
    onDelete
}:{
    order: OrderListElement, 
    onDelete: () => Promise<void>
}) {

    const [isLoadinDelete, startDeleteTransition] = useTransition();

    const handleDelete = () => {
        startDeleteTransition(async () => {
            await onDelete();
        })
    };
    
    return (
        <Card>
        <CardHeader>
            <CardTitle>{order.title}</CardTitle>
            <CardDescription>{order.description}</CardDescription>
        </CardHeader>
         <CardFooter>
            <Button disabled={isLoadinDelete} onClick={handleDelete}>Удалить</Button>
        </CardFooter>
        </Card>
    )
};