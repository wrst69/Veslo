'use client';

import { NotificationEntity } from '@/entities/notification/_domain/types';
import { ROUTES } from '@/shared/constants/routes';
import Link from 'next/link';
import { DropdownMenuItem } from '@/shared/ui/dropdown-menu';
import dayjs from 'dayjs';

export function NotificationElement({
  notification
}: {
  notification: NotificationEntity
}) {
  return  <DropdownMenuItem 
            className={`mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 ${notification.isRead ? null : 'bg-slate-50'}`}
            key={notification.id}
          >
            {notification.isRead ? <span></span> : <span className="flex h-2 w-2 translate-y-1 rounded-full bg-red-800" />}
            <Link href={`${ROUTES.ORDERS}/${notification.orderId}`} /* onClick={() => } */>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  Новая заявка
                </p>
                <p className="text-sm text-muted-foreground">
                  {dayjs(notification.createdAt).format('DD.MM.YYYY H:mm')}
                </p>  
              </div>
            </Link>
          </DropdownMenuItem>
}
