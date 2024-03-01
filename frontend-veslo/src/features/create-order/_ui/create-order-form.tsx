"use client";
import { useForm } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Textarea } from '@/shared/ui/textarea';
import { Input } from '@/shared/ui/input';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from 'react';
import { createOrdersAction } from '../../orders-list/actions';
import { Form } from '@/shared/ui/form';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/ui/utils';

const createOrderFormSchema = z.object({
    title: z.string()
})

export function CreateOrderForm({
    className,
    revalidatePagePath
} : {
    className: string,
    revalidatePagePath: string
}) {
    const [isCreateTransition, startCreateTransition] = useTransition(); 

    const form = useForm({
        resolver: zodResolver(createOrderFormSchema),
        defaultValues: {
          title: "",
          description: ""
        }
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => {
                startCreateTransition(async () => {
                    createOrdersAction(data, revalidatePagePath);
                } )
            })} className={cn(className, "space-y-8")}>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Тайтл</FormLabel>
                            <FormControl>
                                <Input placeholder="название..." {...field} />
                            </FormControl>
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
                            <FormDescription>This is your public display name.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isCreateTransition}>Добавить заявку</Button>
            </form>
        </Form>
    );
}