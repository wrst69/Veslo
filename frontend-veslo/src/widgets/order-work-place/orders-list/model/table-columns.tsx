"use client";

import dayjs from 'dayjs';
import { ColumnDef } from "@tanstack/react-table"
import { OrderEntity, OrderStatus, OrderType } from "@/entities/order/_domain/types";
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
    accessorKey: 'type',
    header: "Тип заявки",
    cell: ({ row }) => {
      const type: OrderType = row.getValue('type');
      
      return <div>{humanizeOrderType(type)}</div>;
    }
  },
  {
    accessorKey: 'measurePoint.title',
    header: 'Адрес',
  },
  {
    accessorKey: 'owner.name',
    header: "Пользователь"
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;
      return <OrderElementActions order={order}/>
    },
  }
]
