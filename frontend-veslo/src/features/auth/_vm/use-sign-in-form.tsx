'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useMutation } from "@tanstack/react-query";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ROUTES } from '@/shared/constants/routes';
import { AuthFormDataDto } from '../model/dto';
import { authRepository } from '../model/auth.repository';

export function useSignInForm() {
    const router = useRouter();

    const formSchema = z.object({
        login: z.string().min(2).max(50),
        password: z.string().min(6).max(50)
    })

    type formValues = z.infer<typeof formSchema>;

    const form  = useForm<formValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            login: '',
            password: ''
        },
    });

    const { handleSubmit, register, reset } = useForm<formValues>();

    const signInMutation = useMutation({
        mutationKey: ['login'],
        mutationFn: (data: AuthFormDataDto) => authRepository.signIn(data),
        onSuccess() {
            reset();
            router.replace(ROUTES.HOME);
        },
    })
    
    const errorMessage = signInMutation.error ? 'Неверный логин или пароль' : undefined;

    return {
        form,
        errorMessage, 
        handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
        isPending: signInMutation.isPending,
        register,
        reset
    }
}
