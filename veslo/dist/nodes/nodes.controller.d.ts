import { NodesService } from './nodes.service';
export declare class NodesController {
    private nodesService;
    constructor(nodesService: NodesService);
    createNode(): void;
    updateNode(): void;
}
