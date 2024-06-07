import { DialogContent } from '@/shared/ui/dialog';
import { Dispatch, SetStateAction } from 'react';
import { DeleteModal } from './delete';
import { UpdateModal } from './update';
import { ModalType } from '../../../model/const';
import { OrderId } from '@/entities/order/_domain/types';

export function Modal({ 
    type,
    id,
    isOpen,
    setOpen 
}: { 
    type: ModalType,
    id: OrderId, 
    isOpen: boolean, 
    setOpen: Dispatch<SetStateAction<boolean>>
}) {
    return <DialogContent className="sm:max-w-md">
                {type === ModalType.DELETE && <DeleteModal id={id} isOpen={isOpen} setOpen={setOpen}/>}
                {type === ModalType.UPDATE && <UpdateModal/>}
            </DialogContent>
}
