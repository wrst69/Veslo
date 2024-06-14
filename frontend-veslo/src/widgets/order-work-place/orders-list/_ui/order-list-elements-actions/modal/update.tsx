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

export function UpdateModal() {
    return <>
                <AlertDialogHeader>
                    <AlertDialogTitle>Редактировать профиль</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex">
                    <AlertDialogCancel>Отменить</AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button>Продолжить</Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </>
}
