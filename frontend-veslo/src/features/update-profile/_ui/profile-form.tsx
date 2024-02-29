"use client";

import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Spinner } from "@/shared/ui/spinner";
import { AvatarField } from "./avatar-field";
import { Profile } from "@/entities/user/profile";
import { UserId } from '@/entities/user/user';
import { useUpdateProfile } from '../_vm/use-update-profile';

const profileFormSchema = z.object({
  login: z.string().optional(),
  name: z
    .string()
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    })
    .transform((name) => name.trim())
    .optional(),
  
  image: z.string().nullable().optional(),
});

const getDefaultValues = (profile: Profile) => {
  return {
    login: profile.login ?? "",
    name: profile.name ?? "",
    image: profile.image ?? "",
  };
};

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm({
  userId,
  profile,
  onSuccess,
  submitText = "Сохранить",
}: { 
  userId: UserId;
  profile: Profile;
  onSuccess?: () => void;
  submitText?: string;
}) {
  
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: getDefaultValues(profile),
  });

  const updateProfile = useUpdateProfile();

  const handleSubmit = form.handleSubmit(async (data) => {
    const newProfile = await updateProfile.update({
      userId,
      data
    })

    form.reset(getDefaultValues(newProfile.profile));
    onSuccess?.();
  });
  

  /* function onSubmit(data: ProfileFormValues) {
    updateProfile.mutate(
      { ...profile, ...data },
      {
        onSuccess: async (data) => {
          form.reset(getDefaultValues(data));
          onSuccess?.();
        },
      },
    );
  } */

  return (
    <Form {...form}>
      <form 
      onSubmit={handleSubmit}
      className="space-y-8">
        {/* <FormField
          control={form.control}
          name="email"
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя пользователя</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Аватарка</FormLabel>
              <FormControl>
                <AvatarField
                  //value={field.value}
                  onChange={field.onChange}
                  profile={profile}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={updateProfile.isPending}>
          {updateProfile.isPending && (
            <Spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-label="Обновление профиля"
            />
          )}
          {submitText}
        </Button>
      </form>
    </Form>
  );
}
