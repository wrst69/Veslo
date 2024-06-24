'use client';

import { useNotificationsQuery } from "@/entities/notification/_repositories/notifications.queries";

export default function Notifications() {
  const { data: notifications} = useNotificationsQuery();
  
  return  <div className="flex flex-col h-screen justify-center items-center">
            {notifications.map(notification => <div key={notification.id}>{notification.type}</div>)}
          </div>
}
