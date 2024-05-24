export enum OrderStatuses {
    Pending = 'PENDING',
    Processing = 'PROCESSING',
    Success = 'SUCCESS',
    Failed = 'FAILED'
};

export enum OrderTypes {
    first = 'FIRST',
    second = 'SECOND',
    third = 'THIRD',
    fourth = 'FOURTH',
    fifth = 'FIFTH'
};

export type OrderComment = {
    id: number,
    owner: number,
    description: string
};

export type OrderEntity = {
    id: number,
    createdAt: string,
    updatedAt: string,
    description: string,
    type: OrderTypes,
    status: OrderStatuses,
    owner: {
        id: number,
        name: string,
    },
    node: {
        lersId: number,
    },
    measurePoint: {
        lersId: number,
        title: string,
    }    
    /* comments: OrderComment[]

    cost: number,  */ //maybe nenado
};
