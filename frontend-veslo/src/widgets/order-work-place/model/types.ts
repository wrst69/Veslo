type NodeListElement = {
    id: number;
    title: string;
    description: string;
    isClosed: boolean;
}

type CreateNodeListElementCommand = {
    title: string;
    description: string;
}

type DeleteNodeListElementCommand = {
    id: number;
}
