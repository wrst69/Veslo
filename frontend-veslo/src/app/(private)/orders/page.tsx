import { nodesRepository } from "@/entities/node/_repositories/nodes.repository";
import OrderWorkPlace from "@/widgets/order-work-place/order-work-place";

export default async function OrdersPage() {
  const { nodeGroups, nodes, measurePoints, equipment } = await nodesRepository.getLersNodesList();

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
