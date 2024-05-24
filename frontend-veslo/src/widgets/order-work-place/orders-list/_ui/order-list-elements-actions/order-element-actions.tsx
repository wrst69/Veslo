import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/shared/ui/dropdown-menu';
import { Dialog, DialogTrigger } from '@/shared/ui/dialog';
import { OrderEntity } from '@/entities/order/_domain/types';
import { useState } from 'react';
import { Modal } from './modal/layout';
import { ModalTypes } from '../../model/types';

export function OrderElementActions({order} : {order: OrderEntity}) {
    const [isOpen, setOpen] = useState(false);
    const [modalType, setModalType] = useState(ModalTypes.NONE);

    return <Dialog open={isOpen} onOpenChange={setOpen}>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Действия</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DialogTrigger asChild onClick={() => setModalType(ModalTypes.UPDATE)}>
                        <DropdownMenuItem>Редактировать</DropdownMenuItem>
                    </DialogTrigger>
                    <DialogTrigger asChild onClick={() => setModalType(ModalTypes.DELETE)}>
                        <DropdownMenuItem className="text-red-800">Удалить</DropdownMenuItem>
                    </DialogTrigger>
                </DropdownMenuContent>  
                </DropdownMenu>
                <Modal type={modalType} id={order.id} isOpen={isOpen} setOpen={setOpen}/>      
            </Dialog>
}
