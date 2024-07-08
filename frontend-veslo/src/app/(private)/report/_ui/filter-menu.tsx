import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { ListFilter } from "lucide-react";
import { OrderStatus } from "@/entities/order/_domain/const";

export function FilterMenu({
  filter,
  setFilter
}: {
  filter,
  setFilter
}) {
  const testHandle = (status: OrderStatus.Success) => {
    setFilter({ status});
  }

  return  <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Фильтры</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuCheckboxItem textValue={"ALL"} checked={filter.status === "ALL"} onCheckedChange={() => setFilter({status: "ALL"})}>Все</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={filter.status === OrderStatus.Processing} onCheckedChange={() => setFilter({status: OrderStatus.Processing})}>В работе</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={filter.status === OrderStatus.Success} onCheckedChange={() => setFilter({status: OrderStatus.Success})}>Закрытые</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Архив</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
}
