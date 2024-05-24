import { DialogContent } from '@/shared/ui/dialog';
import { Dispatch, SetStateAction } from 'react';
import { DeleteModal } from './delete';
import { UpdateModal } from './update';
import { ModalTypes } from '../../../model/types';

export function Modal({ 
    type,
    id,
    isOpen,
    setOpen 
}: { 
    type: ModalTypes,
    id: number, 
    isOpen: boolean, 
    setOpen: Dispatch<SetStateAction<boolean>>
}) {
    return <DialogContent className="sm:max-w-md">
                {type === ModalTypes.DELETE && <DeleteModal id={id} isOpen={isOpen} setOpen={setOpen}/>}
                {type === ModalTypes.UPDATE && <UpdateModal/>}
            </DialogContent>
}
