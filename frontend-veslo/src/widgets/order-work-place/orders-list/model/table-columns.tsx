"use client";

import dayjs from 'dayjs';
import { ColumnDef } from "@tanstack/react-table"
import { OrderEntity, OrderStatus } from "@/entities/order/_domain/types";
import { OrderElementActions } from "../_ui/order-list-elements-actions/order-element-actions";
import { humanizeOrderStatus, humanizeOrderType } from '@/shared/lib/utils';

export const columns: ColumnDef<OrderEntity>[] = [
  {
    accessorKey: 'createdAt',
    header: 'Создана',
    cell: ({ row }) => {
      const date: Date = row.getValue('createdAt');
      const formattedDate = dayjs(date).format('DD.MM.YYYY');
      
      return <div>{formattedDate}</div>;
    }
  },
  {
    accessorKey: 'status',
    header: 'Статус',
    cell: ({ row }) => {
      const status: OrderStatus = row.getValue('status');
      
      return <div>{humanizeOrderStatus(status)}</div>;
    }
  },
  {
    accessorKey: 'measurePoint.title',
    header: 'Адрес',
  },
  {
    accessorKey: 'type',
    header: "Тип заявки",
    cell: ({ row }) => {
      const type: OrderStatus = row.getValue('type');
      
      return <div>{humanizeOrderType(type)}</div>;
    }
  },
  {
    accessorKey: 'owner.name',
    header: "Пользователь"
  },
  /* {
    accessorKey: "cost",
    header: () => <div className="text-right">Цена</div>,
    cell: ({ row }) => {
      const cost = parseFloat(row.getValue("cost"))
      const formatted = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(cost)

      return <div className="text-right font-medium">{formatted}</div>
    }
  }, */
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;
      return <OrderElementActions order={order}/>
    },
  }
]
