"use client"
 
import { NotificationEntity } from "@/entities/notification/_domain/types";
import { ColumnDef } from "@tanstack/react-table";
 
export const columns: ColumnDef<NotificationEntity>[] = [
  {
    accessorKey: "createdAt",
    header: "Дата",
  },
  {
    accessorKey: "type",
    header: "Тип",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]