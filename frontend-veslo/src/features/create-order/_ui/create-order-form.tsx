"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
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
import { useState } from 'react';
import { OrderType } from '@/entities/order/_domain/const';

const createOrderFormSchema = z.object({
    type: z.nativeEnum(OrderType, {
        required_error: 'Необходимо выбрать тип заявки',
    }),
    description: z.string().min(1, 'Поле не должно быть пустым')
});
 
export type formValues = z.infer<typeof createOrderFormSchema>;

export function CreateOrderForm({
    selectedPoint,
    setOpen
} : {
    selectedPoint,
    setOpen
}) {
    const {currentNode: node, currentMeasurePoint: measurePoint} = selectedPoint;

    const form = useForm<formValues>({
        resolver: zodResolver(createOrderFormSchema),
        defaultValues: {
          type: undefined,
          description: ''
        },
    });

    const createOrderMutation = useCreateOrderMutation();

    const [isModalOpen, setModalOpen] = useState(false);
    
    const onSubmit = (values: formValues) => {
        const order: CreateOrderDto = {
            nodeLersId: node.id,
            nodeTitle: node.title,
            measurePointLersId: measurePoint.id,
            measurePointTitle: measurePoint.title,
            type: values.type,
            description: values.description
        };

        createOrderMutation.mutate(order, {
            onSuccess() {
                setOpen(false);
                toast('Заявка успешно добавлена');
            }
        });
    }

    return  <Form {...form}>
                <form /* onSubmit={form.handleSubmit(onSubmit)} */ className={"space-y-8"}>
                    <div className='text-black text-base'>{measurePoint.title}</div>
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Тип заявки</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Выберите тип заявки" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {Object.values(OrderType).map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} 
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Описание</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="описание..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} 
                    />
                    {/* <Button disabled={createOrderMutation.isPending}>Добавить заявку</Button> */}
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
