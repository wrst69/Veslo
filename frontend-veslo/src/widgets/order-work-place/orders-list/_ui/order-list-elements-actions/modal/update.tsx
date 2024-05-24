'use client';

import { Button } from '@/shared/ui/button';
import { DialogClose, DialogFooter, DialogHeader, DialogTitle } from '@/shared/ui/dialog';

export function UpdateModal() {
    return <>
                <DialogHeader>
                <DialogTitle>Редактировать профиль</DialogTitle>
                </DialogHeader>
                <DialogFooter className="flex">
                    {/* <Button type="button" className='w-40'>
                        Да
                    </Button> */}
                <DialogClose asChild>
                    <Button type="button" className='w-40' variant="destructive">
                        Нет
                    </Button>
                </DialogClose>
                </DialogFooter>
            </>
}
