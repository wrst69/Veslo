"use client";

import dayjs from 'dayjs';
import { ColumnDef } from "@tanstack/react-table"
import { OrderEntity } from "@/entities/order/_domain/types";
import {  OrderElementActions } from "../_ui/order-list-elements-actions/order-element-actions";

export const columns: ColumnDef<OrderEntity>[] = [
  {
    accessorKey: 'createdAt',
    header: 'Создана',
    cell: ({ row }) => {
      const date: Date = row.getValue('createdAt');
      const formattedDate = dayjs(date).format('DD/MM/YYYY');
      
      return <div className="text-right font-medium">{formattedDate}</div>;
    }
  },
  {
    accessorKey: 'status',
    header: 'Статус'
  },
  {
    accessorKey: 'measurePoint.title',
    header: 'Адрес'
  },
  {
    accessorKey: 'type',
    header: "Тип заявки",
  },
  {
    accessorKey: 'owner.name',
    header: "Пользователь",
    /* cell: ({row}) => <div className='cursor-pointer'>{row.original.owner.name}</div> */
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
  },
]
