'use client';

import { NotificationEntity } from '@/entities/notification/_domain/types';
import { ROUTES } from '@/shared/constants/routes';
import Link from 'next/link';
import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import dayjs from 'dayjs';
import { NotificationType } from '@/entities/notification/_domain/const';
import { useSetNotificationIsReadMutation } from '@/entities/notification/_repositories/notifications.queries';

export function NotificationElement({
  notification
}: {
  notification: NotificationEntity
}) {
  const setIsReadMutation = useSetNotificationIsReadMutation();

  const getNotificationType = () => {
    switch(notification.type) {
      case NotificationType.NewOrder:
        return `Создана новая заявка № ${notification.orderId}`;
      case NotificationType.OrderAccepted:
        return `Заявка № ${notification.orderId} принята`;
      case NotificationType.OrderCommented:
        return `Новый комментарий к заявке № ${notification.orderId}`;
      case NotificationType.OrderUpdated:
        return `Отредактирована заявка № ${notification.orderId}`;
      case NotificationType.OrderCompleted:
        return `Заявка № ${notification.orderId} выполнена`;
      case NotificationType.OrderFailed:
        return `Заявка № ${notification.orderId} не выполнена`;
      case NotificationType.OrderDeleted:
        return `Заявка № ${notification.orderId} удалена`;
    }
  };

  const handleClick = () => setIsReadMutation.mutate(notification.id);

  return  <DropdownMenuItem 
            className={`mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 ${notification.isRead ? null : 'bg-slate-50'}`}
            key={notification.id}
          >
            {notification.isRead ? <span></span> : <span className="flex h-2 w-2 translate-y-1 rounded-full bg-red-800" />}
            <Link href={`${ROUTES.ORDERS}/${notification.orderId}`} onClick={handleClick}>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {getNotificationType()}
                </p>
                <p className="text-sm text-muted-foreground">
                  {dayjs(notification.createdAt).format('DD.MM.YYYY H:mm')}
                </p>  
              </div>
            </Link>
          </DropdownMenuItem>
}
