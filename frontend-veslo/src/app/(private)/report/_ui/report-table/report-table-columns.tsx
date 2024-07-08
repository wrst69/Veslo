"use client"

import { OrderEntity, OrderType } from "@/entities/order/_domain/types"
import { humanizeOrderType } from "@/shared/lib/utils";
import { ColumnDef } from "@tanstack/react-table"
import dayjs from "dayjs";

export const reportTableColumns: ColumnDef<OrderEntity>[] = [
  {
    accessorKey: "id",
    header: "Номер заявки",
  },
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
    accessorKey: 'type',
    header: "Тип заявки",
    cell: ({ row }) => {
      const type: OrderType = row.getValue('type');
      
      return <div>{humanizeOrderType(type)}</div>;
    }
  },
  {
    accessorKey: "measurePoint.title",
    header: "Адрес",
  },
  {
    accessorKey: "description",
    header: "Описание",
  },
]
