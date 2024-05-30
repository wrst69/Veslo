import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/shared/ui/alert-dialog';
import { Button } from '@/shared/ui/button';
import { Dispatch, SetStateAction } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';
import { formValues } from './create-order-form';

export function CreateOrderModal({
    isOpen,
    onOpenChange,
    handleSubmit,
    onSubmit,
    isSubmitDisabled
}: {
    isOpen: boolean,
    onOpenChange: Dispatch<SetStateAction<boolean>>,
    handleSubmit: UseFormHandleSubmit<formValues>,
    onSubmit: (values: formValues) => void,
    isSubmitDisabled: boolean
}) {
return <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
            <AlertDialogTrigger asChild >
                <Button disabled={isSubmitDisabled}>Добавить заявку</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Подтверждение</AlertDialogTitle>
                <AlertDialogDescription>Уверены, что хотите создать заявку?</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Отменить</AlertDialogCancel>
                <AlertDialogAction asChild onClick={() => onOpenChange(false)}>
                    <Button onClick={handleSubmit(onSubmit)}>Продолжить</Button>
                </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
}
