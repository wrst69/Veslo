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
import { AlertDialog, AlertDialogTrigger } from '@/shared/ui/alert-dialog';
import { OrderEntity } from '@/entities/order/_domain/types';
import { useState } from 'react';
import { Modal } from './modal/layout';
import { ModalType } from '../../model/const';
import { useSessionQuery } from '@/entities/session/session.queries';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';

export function OrderElementActions({
    order
}: {
    order: OrderEntity
}) {
    const [isOpen, setOpen] = useState(false);
    const [modalType, setModalType] = useState(ModalType.NONE);

    const { data: user } = useSessionQuery();

    if (!user) {
        return null;
    }

    return <AlertDialog open={isOpen} onOpenChange={setOpen}>
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
                    <Link href={`${ROUTES.ORDERS}/${order.id}`}>
                        <DropdownMenuItem>Открыть</DropdownMenuItem>
                    </Link>
                    <AlertDialogTrigger asChild disabled={user.id !== order.owner.id} onClick={() => setModalType(ModalType.UPDATE)}>
                        <DropdownMenuItem>Редактировать</DropdownMenuItem>
                    </AlertDialogTrigger>
                    <AlertDialogTrigger asChild disabled={user.id !== order.owner.id} onClick={() => setModalType(ModalType.DELETE)}>
                        <DropdownMenuItem className="text-red-800">Удалить</DropdownMenuItem>
                    </AlertDialogTrigger>     
                </DropdownMenuContent>  
                </DropdownMenu>
                <Modal type={modalType} id={order.id} isOpen={isOpen} setOpen={setOpen}/>     
            </AlertDialog>
}
