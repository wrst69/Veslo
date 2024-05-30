"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/shared/ui/table";
import { useRouter } from "next/navigation";
import { OrdersTableHeader } from "./components/table-header";
import { EmptyOrdersTableRow } from "./components/empty-table-row";
import { ROUTES } from "@/shared/constants/routes";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function OrdersTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(), 
  })

  const router = useRouter();

  return (
    <div className="rounded-lg border"> 
      <Table>
        <OrdersTableHeader table={table}/>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="cursor-pointer"
                data-state={row.getIsSelected() && "selected"}
                onClick={() => router.push(`${ROUTES.ORDERS}/${row.original.id.toString()}`)}
              >
                {row.getVisibleCells().map((cell) => (  
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
            ) : <EmptyOrdersTableRow columns={columns}/>}
        </TableBody>
      </Table>
    </div>
  )
}
