import { OrderEntity } from "@/entities/order/_domain/types";
import { humanizeOrderStatus, humanizeOrderType } from "@/shared/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import dayjs from "dayjs";

export default function DeletedOrderPage({
  order 
}: { 
  order : OrderEntity
}) {
  return  <main className="space-y-6 py-14 container  max-w-[800px]">
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex flex-col text-lg">
                    <div className="text-xl">Заявка № {order.id}</div>
                    <div className="mt-1">{order.measurePoint.title}</div>
                  </CardTitle>
                  <CardDescription>Создана: {dayjs(order.createdAt).format('DD.MM.YYYY H:mm')}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Статус заявки</div>
                  <span className="text-muted-foreground">{humanizeOrderStatus(order.status)}</span>
                  <Separator className="my-2" />
                  <div className="font-semibold">Тип заявки</div>
                  <span className="text-muted-foreground">{humanizeOrderType(order.type)}</span>
                  <Separator className="my-2" />
                  <div className="font-semibold">Описание</div>
                  <span className="text-muted-foreground">{order.description}</span>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Создал заявку</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Пользователь</dt>
                      <dd>{order.owner.name}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Телефон</dt>
                      <dd>
                        <div>+7 891 011 1213</div>
                      </dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3"/>   
            </Card>
          </main>
}