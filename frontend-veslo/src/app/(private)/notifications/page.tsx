'use client';

import { useNotificationsQuery } from "@/entities/notification/_repositories/notifications.queries";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { ArrowUpRight, MailOpen, Trash2 } from "lucide-react";

export default function Notifications() {
  const { data: notifications} = useNotificationsQuery();
  
  return  <main className="space-y-6 py-14 container  max-w-[800px]">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle className="text-xl">Уведомления</CardTitle>
               {/*  <CardDescription>
                 
                </CardDescription> */}
              </div>
            </CardHeader>
            <CardContent>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <Button size="sm" className="ml-auto gap-2">
                <MailOpen className="h-4 w-4" />
                Пометить прочитанными
              </Button>
              <Button size="sm" className="ml-auto gap-2">
                <Trash2 className="h-4 w-4" />
                Удалить
              </Button>
            </div>
                {notifications.map(notification => <div key={notification.id}>{notification.type}</div>)}
            </CardContent>
          </Card>
        </main>
}
