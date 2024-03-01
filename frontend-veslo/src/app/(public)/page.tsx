import { nodesRepository } from "@/features/nodes-list/nodes.repository";
import { ordersRepository } from "@/entities/order/_repositories/orders";

import OrderWorkPlace from "@/widgets/order-work-place/order-work-place";

export default async function Home() {
  const orders = await ordersRepository.getOrdersList();

  const { nodeGroups, nodes, measurePoints, equipment } = await nodesRepository.getNodesList();

  //console.log(measurePoints.equipment.filter(item => item.id = 313));

  //console.log(equipment.list)
  //console.log(equipment.modelList)
  //console.log(equipment.nodeEquipment)

  //console.log(measurePoints.equipmentModels)
  //console.log(measurePoints.equipment)

  return (
    <main className="flex min-h-screen flex-col p-8">
      <OrderWorkPlace
        orders={orders}
        nodeGroups={nodeGroups}
        nodes={nodes}
        measurePoints={measurePoints}
      />
    </main>
  );
}
