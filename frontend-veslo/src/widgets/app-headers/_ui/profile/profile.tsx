"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { User, LogOut } from "lucide-react";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { Skeleton } from "@/shared/ui/skeleton";
import { useSessionQuery } from "@/entities/session/session.queries";
import { UserAvatar } from "@/features/profile/_ui/avatar";
import { useSignOut } from "@/features/auth/_vm/use-sign-out";
import { ROUTES } from "@/shared/constants/routes";

export function Profile() {
    const { data, isLoading }= useSessionQuery();
    const { isPending, signOut } = useSignOut();

    if (isLoading) {
      return <Skeleton className="w-8 h-8 rounded-full" />;
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="p-px rounded-full self-center h-8 w-8"
          >
            <UserAvatar/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-2 ">
          <DropdownMenuLabel>
            <p>Мой аккаунт</p>
            <p className="text-sm text-muted-foreground overflow-hidden text-ellipsis">
              { data && data.name}      
            </p> 
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href={`${ROUTES.PROFILE}/${data?.id}`}>
                <User className="mr-2 h-4 w-4"/>
                <span>Профиль</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem disabled={isPending} onClick={() => signOut()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Выход</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>     
    );
}
