"use client";

import { useQuery } from "@tanstack/react-query";
import { ProfileForm } from "./_ui/profile-form";
import { Spinner } from "@/shared/ui/spinner";
import { useRouter } from "next/navigation";
import { getProfileQuery } from "@/sdsdsd/user/_queries";

export function UpdateProfileForm({
  userId,
  callbackUrl,
}: {
  userId: string;
  callbackUrl?: string;
}) {

  const router = useRouter();
  const handleSuccess = () => {
    if (callbackUrl) {
      router.push(callbackUrl);
    }
  };

  const profileQuery = useQuery({
    ...getProfileQuery(userId)
  });

  if (profileQuery.isPending) {
    return <Spinner aria-label="Загрузка профиля" />;
  }

  if (!profileQuery.data) {
    return <div>Не удалось загрузить профиль, возможно у вас нет прав</div>;
  }

  return (
    <ProfileForm
      userId={userId}
      profile={profileQuery.data.profile}
      onSuccess={handleSuccess}
      submitText={callbackUrl ? "Продолжить" : "Сохранить"}
    />
  );
}
