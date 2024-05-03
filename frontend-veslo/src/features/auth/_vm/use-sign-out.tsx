import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes";

export function useSignOut() {
    const router = useRouter();
    
    /* const signOutMutation = useMutation({
        mutationFn: authControllerSignOut,
        onSuccess() {
            router.push(ROUTES.SIGN_IN)
        }
    }) */

    /* return {
        isPending: signOutMutation.isPending,
        signOut: signOutMutation.mutate
    } */
}
