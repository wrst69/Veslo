'use client';

import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Mail } from 'lucide-react';
import { Badge, ThemeProvider, createTheme } from '@mui/material';
import { useSessionQuery } from "@/entities/session/session.queries";
import { NotificationsList } from "./notifications-list";
import { useNotificationsQuery } from "@/entities/notification/_repositories/notifications.queries";
import { NotificationEntity } from "@/entities/notification/_domain/types";

const theme = createTheme({
  palette: {
    secondary: {
      main: '#000000'
    }
  }
});

export function Notification() {
  const { data: session } = useSessionQuery();
  const { data: notifications} = useNotificationsQuery();

  if (!session || !notifications) return null;

  const unreadNotificationsCount = notifications.filter((notification: NotificationEntity) => notification.isRead === false).length;
  
  return  <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
              variant="ghost"
              className="p-px rounded-full self-center h-8 w-8"
              >
                <ThemeProvider theme={theme}>
                  <Badge badgeContent={unreadNotificationsCount} className="text-red" color="secondary">
                    <Mail/>
                  </Badge>
                </ThemeProvider>
              </Button>             
            </DropdownMenuTrigger>
            <NotificationsList notifications={notifications} unreadNotificationsCount={unreadNotificationsCount}/>
          </DropdownMenu>
}
