import { Avatar, AvatarImage } from "@/shared/ui/avatar";
//import { Profile } from "../_domain/types";
import { cn } from "@/shared/ui/utils";
import { Logo } from "./logo";


export const UserAvatar = ({
  //profile,
  className,
}: {
  //profile?: Profile;
  className?: string;
}) => {
  /* if (!profile) {
    return null;
  }

  if (profile.image) {
    return (
      <Avatar className={cn(className)}>
        <AvatarImage src={profile.image ?? ""}/>
      </Avatar>
    )
  } */

  return <Logo/>
};
