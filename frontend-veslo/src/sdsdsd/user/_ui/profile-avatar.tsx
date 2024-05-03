import { Avatar, AvatarImage } from "@/shared/ui/avatar";
import { Profile } from "../_domain/types";
import { cn } from "@/shared/ui/utils";
import { Logo } from "@/widgets/app-headers/_ui/logo";

export const ProfileAvatar = ({
  profile,
  className,
}: {
  profile?: Profile;
  className?: string;
}) => {
  if (!profile) {
    return null;
  }

  if (profile.image) {
    return (
      <Avatar className={cn(className)}>
        <AvatarImage src={profile.image ?? ""}/>
      </Avatar>
    )
  }

  return <Logo/>
};
