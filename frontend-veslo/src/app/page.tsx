import { CreateOrderForm } from "@/features/orders-list/pub/create-order-form";
import { OrdersList } from "@/features/orders-list/pub/orders-list";
import { Button } from "@/shared/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <CreateOrderForm revalidatePagePath="/" className="max-w-[300px] mb-5"/>
      <OrdersList revalidatePagePath="/"/>
    </main>
  );
}
