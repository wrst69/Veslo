'use client';

import { File } from "lucide-react";
import { Button } from "@/shared/ui/button";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/ui/tabs';
import { useFilteredOrdersQuery } from "@/entities/order/_repositories/orders.queries";

import { InfoCards } from "./_ui/info-cards";
import { FilterMenu } from "./_ui/filter-menu";
import { useState } from "react";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { PeriodTypes } from "./model/const";
import { FilteredOrdersDto } from "@/entities/order/_domain/dto";
import { reportTableColumns } from "./_ui/report-table/report-table-columns";
import { ReportTable } from "./_ui/report-table/report-table";

export default function ReportPage() {
  const [period, setPeriod] = useState<string>(PeriodTypes.All);
  const [filter, setFilter] = useState<FilteredOrdersDto>({ status: 'ALL'})

  const { data, isPending } = useFilteredOrdersQuery(filter);

  if (isPending) {
    return <FullPageSpinner/>;
  }

  if (data) {
    return  <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
              <Tabs defaultValue={PeriodTypes.All} onValueChange={(value: string) => setPeriod(value)}>
                <div className="flex items-center">
                  <TabsList>
                    <TabsTrigger value={PeriodTypes.All}>Все</TabsTrigger>
                    <TabsTrigger value={PeriodTypes.Month}>Месяц</TabsTrigger>
                    <TabsTrigger value={PeriodTypes.Quarter}>Квартал</TabsTrigger>
                    <TabsTrigger value={PeriodTypes.Archived} className="hidden sm:flex">Год</TabsTrigger>
                  </TabsList>
                  <div className="ml-auto flex items-center gap-2">
                    <FilterMenu filter={filter} setFilter={setFilter}/>
                    <Button size="sm" className="h-8 gap-1">
                      <File className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Скачать отчет</span>
                    </Button>
                  </div>
                </div>
                <TabsContent value={period}>
                  <InfoCards/>
                  <ReportTable columns={reportTableColumns} data={data}/>
                </TabsContent>
              </Tabs>
            </main>
          </div>
  }
}
