'use client';

import { Button } from '@/shared/ui/button';
import { DialogClose, DialogFooter, DialogHeader, DialogTitle } from '@/shared/ui/dialog';
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
                <DialogHeader>
                <DialogTitle>Уверены, что хотите удалить заявку?</DialogTitle>
                </DialogHeader>
                <DialogFooter className="flex">       
                <DialogClose asChild>
                    <Button type="button" className='w-40' >
                        Нет
                    </Button>
                </DialogClose>
                    <Button type="button" variant="destructive" className='w-40' onClick={handleOkClick}>
                        Да
                    </Button>
                </DialogFooter>
            </>
    };
