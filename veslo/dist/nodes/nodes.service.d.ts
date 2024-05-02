import { DbService } from 'src/db/db.service';
export declare class NodesService {
    private db;
    constructor(db: DbService);
    createNode(dto: any): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
    }>;
    updateNode(): Promise<void>;
}
