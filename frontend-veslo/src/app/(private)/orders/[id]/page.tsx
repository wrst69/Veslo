"use client";

import { OrderStatus } from "@/entities/order/_domain/const";
import { useOrderByIdQuery } from "@/entities/order/_repositories/orders.queries"
import { humanizeOrderStatus, humanizeOrderType } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { Separator } from "@/shared/ui/separator";
import dayjs from "dayjs";
import { MoreVertical, FileCheck } from "lucide-react";
import { notFound } from "next/navigation";
import DeletedOrderPage from "./deleted-order-page";
import { useSessionQuery } from "@/entities/session/session.queries";
import { AcceptOrderButton } from "@/features/accept-order/accept-button";

export default function OrderPage({ params } : { params : { id: string }}) {
  const { data: user } = useSessionQuery();
  const { data: order, isLoading } = useOrderByIdQuery(parseInt(params.id));

  if (isLoading) {
    return <FullPageSpinner isLoading={isLoading}/>;
  };

  if (!order) {
    return notFound();
  };

  if (order.status === OrderStatus.Deleted) {
    return <DeletedOrderPage order={order}/>;
  };

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
                <div className="ml-auto flex items-center gap-1">
                  { order.status === OrderStatus.Pending && <AcceptOrderButton orderId={order.id}/>}
                  { user?.id === order.owner.id &&  <DropdownMenu>
                                                      <DropdownMenuTrigger asChild>
                                                        <Button size="icon" variant="outline" className="h-8 w-8">
                                                          <MoreVertical className="h-3.5 w-3.5" />
                                                          <span className="sr-only">More</span>
                                                        </Button>
                                                      </DropdownMenuTrigger>
                                                      <DropdownMenuContent align="end">
                                                        <DropdownMenuItem>Редактировать</DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-800">Удалить</DropdownMenuItem>
                                                      </DropdownMenuContent>
                                                    </DropdownMenu>
                  }
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
                      <a href="tel:">+7 891 011 1213</a>
                    </dd>
                  </div>
                </dl>
              </div>
                {/* {order.updatedAt !== order.createdAt && <><Separator className="my-4" />
                                                        <div className="grid gap-3">
                                                          <div className="font-semibold">Тут апдейты заявки</div>
                                                        </div></>
                }   */}         
            </CardContent>
              {/* 
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <div className="font-semibold">Order Details</div>
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Glimmer Lamps x <span>2</span>
                      </span>
                      <span>$250.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Aqua Filters x <span>1</span>
                      </span>
                      <span>$49.00</span>
                    </li>
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$299.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>$5.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span>$25.00</span>
                    </li>
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Total</span>
                      <span>$329.00</span>
                    </li>
                  </ul>
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <div className="font-semibold">Shipping Information</div>
                    <address className="grid gap-0.5 not-italic text-muted-foreground">
                      <span>Liam Johnson</span>
                      <span>1234 Main St.</span>
                      <span>Anytown, CA 12345</span>
                    </address>
                  </div>
                  <div className="grid auto-rows-max gap-3">
                    <div className="font-semibold">Billing Information</div>
                    <div className="text-muted-foreground">
                      Same as shipping address
                    </div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Customer Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Customer</dt>
                      <dd>Liam Johnson</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Email</dt>
                      <dd>
                        <a href="mailto:">liam@acme.com</a>
                      </dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-muted-foreground">Phone</dt>
                      <dd>
                        <a href="tel:">+1 234 567 890</a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-3">
                  <div className="font-semibold">Payment Information</div>
                  <dl className="grid gap-3">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        Visa
                      </dt>
                      <dd>**** **** **** 4532</dd>
                    </div>
                  </dl>
                </div>
              </CardContent>
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter> */}
              <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                {/* <div className="text-xs text-muted-foreground">
                  Updated <time dateTime="2023-11-23">November 23, 2023</time>
                </div>
                <Pagination className="ml-auto mr-0 w-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="sr-only">Previous Order</span>
                      </Button>
                    </PaginationItem>
                    <PaginationItem>
                      <Button size="icon" variant="outline" className="h-6 w-6">
                        <ChevronRight className="h-3.5 w-3.5" />
                        <span className="sr-only">Next Order</span>
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination> */}
              </CardFooter>
            </Card>
            </main>
}
