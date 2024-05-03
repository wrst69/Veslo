"use client";
 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useSignInForm } from "../_vm/use-sign-in-form";

export function SignInForm() {
    const { form, errorMessage, handleSubmit, register, isPending } = useSignInForm();
    
    return (
      <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <FormField
          control={form.control}
          name="login"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Логин</FormLabel>
              <FormControl>
                <Input placeholder="Введите логин" {...register ('login', { required: true })} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Введите пароль" {...register ('password', { required: true })} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit" size={"lg"}>Войти</Button>
        {errorMessage && <div className="text-rose-500 ">{errorMessage}</div>}
      </form>
    </Form>
    )
}
