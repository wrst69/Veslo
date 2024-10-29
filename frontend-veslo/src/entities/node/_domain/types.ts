export type NodeLersId = number;

export type MeasurePointLersId = number;

export type Node = {
    id: NodeLersId,
    title: string
};

export type NodeGroup = {
    nodeGroup: {
        id: number,
        title: string
    }
}

export type MeasurePoint = {
    id: MeasurePointLersId,
    nodeId: NodeLersId,
    title: string
};
