'use client';

import { Button } from '@/shared/ui/button';
import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/shared/ui/alert-dialog';
import { useDeleteOrderMutation } from '@/entities/order/_repositories/orders.queries';
import { Dispatch, SetStateAction } from 'react';

export function DeleteModal({
    id, 
    isOpen,  
    setOpen      
}: { 
    id: number, 
    isOpen: boolean, 
    setOpen: Dispatch<SetStateAction<boolean>>     
}) {
    const  deleteOrder  = useDeleteOrderMutation();
         
    const handleOkClick = () => {
        deleteOrder.mutate(id);
        setOpen(!isOpen);
    };

    return  <>
                <AlertDialogHeader>
                    <AlertDialogTitle>Подтверждение</AlertDialogTitle>
                    <AlertDialogDescription>Уверены, что хотите удалить заявку?</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex">       
                    <AlertDialogCancel>Отменить</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button onClick={handleOkClick}>Продолжить</Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </>
    };
