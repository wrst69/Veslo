'use client';

import { useLersNodesQuery } from "@/entities/node/_repositories/nodes.queries";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import OrderWorkPlace from "@/widgets/order-work-place/order-work-place";

export default function OrdersPage() {
  const { data, isLoading } = useLersNodesQuery();

  if (isLoading) {
    return <FullPageSpinner/>
  }

  const {nodeGroups, nodes, measurePoints, equipment } = data;

  return (
    <main className="flex min-h-screen flex-col p-8">
      <OrderWorkPlace
        nodeGroups={nodeGroups}
        nodes={nodes}
        measurePoints={measurePoints}
        //equipment={equipment}
      />
    </main>
  );
}
