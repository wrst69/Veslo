import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { authRepository } from "../model/auth.repository";
import { useResetSession } from "@/entities/session/queries";

export function useSignOut() {
    const router = useRouter();
    const resetSession = useResetSession();

    const signOutMutation = useMutation({
        mutationKey: ['sign-out'],
        mutationFn: () => authRepository.signOut(),
        onSuccess() {
            router.push(ROUTES.SIGN_IN);
            resetSession();
        },
    })

    return {
        isPending: signOutMutation.isPending,
        signOut: signOutMutation.mutate
    }
}
