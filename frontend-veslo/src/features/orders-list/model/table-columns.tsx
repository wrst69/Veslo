"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { OrderEntity } from "@/entities/order/_domain/types";

export const columns: ColumnDef<OrderEntity>[] = [
  {
    accessorKey: "status",
    header: "Статус заявки",
  },
 /*  {
    accessorKey: "name",
    header: "Пользователь",
  }, */
  {
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
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Действия</DropdownMenuLabel>
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem>Редактировать</DropdownMenuItem>
            <DropdownMenuItem className="text-red-800">Удалить</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
