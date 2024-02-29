"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Spinner } from "@/shared/ui/spinner";
import { useNameSignIn } from "../_vm/use-name-sign-in";

export function NameSignInForm() {
  const form = useForm<{ name: string }>({
    defaultValues: {
      name: "",
    },
  });

  const nameSignIn = useNameSignIn();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => nameSignIn.signIn(data.name))}
      >
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="PopovPP"
                    type="name"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={nameSignIn.isPending}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button disabled={nameSignIn.isPending}>
            {nameSignIn.isPending && <Spinner className="mr-2 h-4 w-4" aria-label="Загрузка выхода"/>}
            Войти через Email
          </Button>
        </div>
      </form>
    </Form>
  );
}
