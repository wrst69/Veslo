"use client";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/shared/ui/select';
import { Textarea } from '@/shared/ui/textarea';
import { Form } from '@/shared/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { CreateOrderDto } from '@/entities/order/_domain/dto';
import { useCreateOrderMutation } from '@/entities/order/_repositories/orders.queries';
import { CreateOrderModal } from './modal';
import { Dispatch, useState } from 'react';
import { OrderType } from '@/entities/order/_domain/const';
import { useUsersQuery } from '@/entities/user/_repositories/users.queries';
import { Checkbox } from '@/shared/ui/checkbox';
import { humanizeOrderType } from '@/shared/lib/utils';
import { SelectedPoint } from '@/entities/selected-point/_domain/types';
import { UserEntity } from '@/entities/user/_domain/types';

const createOrderFormSchema = z.object({
    type: z.nativeEnum(OrderType, {
        required_error: 'Необходимо выбрать тип заявки'
    }),
    recipients: z.array(z.number()).refine((value) => value.some((item) => item), {
        message: "Необходимо выбрать получателей",
    }),
    description: z.string().min(1, 'Поле не должно быть пустым')
});


export type formValues = z.infer<typeof createOrderFormSchema>;

export function CreateOrderForm({
    selectedPoint,
    setOpen
} : {
    selectedPoint: SelectedPoint,
    setOpen: Dispatch<boolean>
}) {
    const [isModalOpen, setModalOpen] = useState(false);

    const createOrderMutation = useCreateOrderMutation();

    const form = useForm<formValues>({
        resolver: zodResolver(createOrderFormSchema),
        defaultValues: {
          type: undefined,
          recipients: [],
          description: ''
        },
    });

    const {data: users, isLoading: isUsersLoading} = useUsersQuery();

    const {currentNode: node, currentMeasurePoint: measurePoint} = selectedPoint;

    if (!node || !measurePoint) return null;

    const onSubmit = (values: formValues) => {
        const order: CreateOrderDto = {
            nodeLersId: node.id,
            nodeTitle: node.title,
            measurePointLersId: measurePoint.id,
            measurePointTitle: measurePoint.title,
            type: values.type,
            description: values.description,
            recipients: values.recipients
        };

        createOrderMutation.mutate(order, {
            onSuccess() {
                setOpen(false);
                toast('Заявка успешно добавлена');
            }
        });
    }

    if (isUsersLoading) return null;
    
    return  <Form {...form}>
                <form /* onSubmit={form.handleSubmit(onSubmit)} */ className={"space-y-8"}>
                    <div className='text-black text-base'>{measurePoint.title}</div>
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base">Тип заявки</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Выберите тип заявки" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {Object.values(OrderType).map(type => <SelectItem key={type} value={type}>{humanizeOrderType(type)}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} 
                    />
                    <FormField
                            control={form.control}
                            name="recipients"
                            render={() => (
                                <FormItem>
                                
                                    <FormLabel className="text-base">Получатели</FormLabel>
                                
                                {users.map((user: UserEntity) => (
                                    <FormField
                                    key={user.id}
                                    control={form.control}
                                    name="recipients"
                                    render={({ field }) => {
                                        return (
                                        <FormItem
                                            key={user.id}
                                            className="flex flex-row items-start space-x-3 space-y-0"
                                        >
                                            <FormControl>
                                            <Checkbox
                                                checked={field.value?.includes(user.id)}
                                                onCheckedChange={(checked) => {
                                                return checked
                                                    ? field.onChange([...field.value, user.id])
                                                    : field.onChange(
                                                        field.value?.filter(
                                                        (value) => value !== user.id
                                                        )
                                                    )
                                                }}
                                            />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                            {user.name}
                                            </FormLabel>
                                        </FormItem>
                                        )
                                    }}
                                    />
                                ))}
                                <FormMessage />
                                </FormItem>
                            )}
                    /> 
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base">Описание</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="описание..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} 
                    />
                    <CreateOrderModal
                        isOpen={isModalOpen}
                        onOpenChange={setModalOpen}
                        handleSubmit={form.handleSubmit}
                        onSubmit={onSubmit}
                        isSubmitDisabled={createOrderMutation.isPending}
                    />
                </form>
            </Form>                                          
}
