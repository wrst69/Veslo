import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export function useNameSignIn() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const nameSignInMutation = useMutation({
    mutationFn: (name: string) =>
      signIn("name", {
        name,
        callbackUrl: callbackUrl ?? undefined,
      }),
  });

  return {
    isPending: nameSignInMutation.isPending,
    signIn: nameSignInMutation.mutate,
  };
}
