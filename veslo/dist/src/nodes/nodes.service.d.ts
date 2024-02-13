import { DbService } from 'src/db/db.service';
export declare class NodesService {
    private db;
    constructor(db: DbService);
    createNode(dto: any): Promise<{
        id: number;
        name: string;
    }>;
    updateNode(): Promise<void>;
}
