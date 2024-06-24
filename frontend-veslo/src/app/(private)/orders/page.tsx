'use server';

import OrderWorkPlace from "@/widgets/order-work-place/order-work-place";

export default async function OrdersPage() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <OrderWorkPlace/>
    </main>
  );
}
