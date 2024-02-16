type OrderListElement = {
    id: number;
    title: string;
    description: string;
    isClosed: boolean;
}

type CreateOrderListElementCommand = {
    title: string;
    description: string;
}

type DeleteOrderListElementCommand = {
    id: number;
}
