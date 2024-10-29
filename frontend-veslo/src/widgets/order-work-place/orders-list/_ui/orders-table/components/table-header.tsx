import { flexRender } from "@tanstack/react-table";

import { TableHead, TableHeader, TableRow } from "@/shared/ui/table";
import { Key } from "react";

export function OrdersTableHeader({table} : {table: any}) {


    return <TableHeader>
                {table.getHeaderGroups().map((headerGroup: { id: Key | null | undefined; headers: any[]; }) => (
                <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                    return (
                        <TableHead key={header.id}>
                        {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                        </TableHead>
                    )
                    })}
                </TableRow>
                ))}
            </TableHeader>
}
