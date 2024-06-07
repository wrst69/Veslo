import { useQuery } from "@tanstack/react-query";
import { nodesRepository } from "./nodes.repository";

const nodesKey = ['nodes'];

export const useLersNodesQuery = () => {
  return useQuery({
    queryKey: nodesKey,
    queryFn: () => nodesRepository.getLersNodesList()
  })
};
