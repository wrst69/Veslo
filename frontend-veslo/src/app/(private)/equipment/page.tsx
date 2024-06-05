import { nodesRepository } from "@/entities/node/_repositories/nodes.repository";
import { TestComponent } from "./test-component";

export default async function Home() {
  const { nodeGroups, nodes, measurePoints, equipment } = await nodesRepository.getLersNodesList();

  return (
    <main className="flex min-h-screen flex-col p-8">
        {/* <TestComponent
            nodes={nodes}
            nodeGroups={nodeGroups}
            equipment={equipment}
            measurePoints={measurePoints}
        /> */}
    </main>
  );
}
