'use client';

import { File } from "lucide-react";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/ui/tabs';
import { useFilteredOrdersQuery } from "@/entities/order/_repositories/orders.queries";
import { ReportTable } from "./_ui/report-table";
import { InfoCards } from "./_ui/info-cards";
import { FilterMenu } from "./_ui/filter-menu";
import { useState } from "react";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { PeriodTypes } from "./model/const";
import { FilteredOrdersDto } from "@/entities/order/_domain/dto";

export default function ReportPage() {
  const [period, setPeriod] = useState<string>(PeriodTypes.All);
  const [filter, setFilter] = useState<FilteredOrdersDto>({ status: 'ALL'})

  const { data, isPending } = useFilteredOrdersQuery(filter);

  if (isPending) {
    return <FullPageSpinner/>;
  }
  console.log(data)
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
                  <InfoCards data={data}/>
                  <div className="mt-4">
                    <Card >
                      {/* <CardHeader className="flex flex-row items-center">
                        <CardTitle>Заявки за выбранный период</CardTitle>
                        <Button asChild size="sm" className="ml-auto gap-1">
                          <Link href="#">
                            View All
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardHeader> */}
                      <CardContent>
                        {/* <ReportTable/> */}
                        <div className="flex flex-col">
                          {data?.map((order) => <div key={order.id}>{`${order.id}            ${order.measurePoint.title}`}</div>)}
                        </div>
                        
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </main>
          </div>
}
