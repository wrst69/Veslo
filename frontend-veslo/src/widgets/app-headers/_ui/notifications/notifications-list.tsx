import { Button } from "@/shared/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuGroup,
} from "@/shared/ui/dropdown-menu";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";
import { normalizeCount } from "@/shared/lib/utils";
import { ROUTES } from "@/shared/constants/routes";
import { NotificationEntity } from "@/entities/notification/_domain/types";
import { NotificationElement } from "./notification-element";
import { useRouter } from "next/navigation";

export function NotificationsList({
  notifications,
  unreadNotificationsCount
}: {
  notifications: NotificationEntity[],
  unreadNotificationsCount: number
}) {
  const router = useRouter();

  if (!notifications) return null;

  return  <DropdownMenuContent asChild>
            <DropdownMenuGroup asChild>
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Уведомления</CardTitle>
                  <CardDescription>
                    У вас {unreadNotificationsCount} {normalizeCount(unreadNotificationsCount, ['непрочитанное','непрочитанных','непрочитанных'])} {normalizeCount(unreadNotificationsCount, ['сообщение','сообщения','сообщений'])}.
                  </CardDescription>
                </CardHeader>
                <div className="ml-4 mb-2 text-xs text-blue-600 cursor-pointer" onClick={() => console.log('aga')} >Пометить прочитанными</div>
                {notifications.slice(0,5).map((notification) => <NotificationElement notification={notification} key={notification.id}/>)}
                <CardFooter> 
                    <Button className="mt-2 w-full" onClick={() => router.push(ROUTES.NOTIFICATIONS)}>
                       Посмотреть все
                    </Button>
                </CardFooter>
              </Card>
            </DropdownMenuGroup>
          </DropdownMenuContent>
}
