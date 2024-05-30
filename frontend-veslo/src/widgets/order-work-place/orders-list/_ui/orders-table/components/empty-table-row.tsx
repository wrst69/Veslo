import { TableCell, TableRow } from '@/shared/ui/table';

export function EmptyOrdersTableRow({ columns }: { columns }) {
    return  <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Нет результатов
              </TableCell>
            </TableRow>
}
