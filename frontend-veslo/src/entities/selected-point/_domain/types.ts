import { MeasurePoint, Node } from "@/entities/node/_domain/types";

export type SelectedPoint = {
  currentNode: Node | undefined,
  currentMeasurePoint: MeasurePoint | undefined
}
