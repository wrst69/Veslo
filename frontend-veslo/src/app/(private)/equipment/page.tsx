import { nodesRepository } from "@/features/nodes-list/nodes.repository";
import { ordersRepository } from "@/entities/order/_repositories/orders";

import OrderWorkPlace from "@/widgets/order-work-place/order-work-place";
import { NodeItem } from "@/features/nodes-list/ui/node-item";


import { useState } from "react";
import { TestComponent } from "./test-component";

export default async function Home() {
  const { nodeGroups, nodes, measurePoints, equipment } = await nodesRepository.getNodesList();

  //console.log(measurePoints.equipment.filter(item => item.id = 313));

  //console.log(equipment.list)
  //console.log(Object.keys(equipment))

  //console.log(equipment.modelList)


  return (
    <main className="flex min-h-screen flex-col p-8">
        <TestComponent
            nodes={nodes}
            nodeGroups={nodeGroups}
            equipment={equipment}
            measurePoints={measurePoints}
        />
    </main>
  );
}
