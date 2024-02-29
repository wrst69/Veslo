import { LersService } from './lers.service';
export declare class LersController {
    private lersService;
    constructor(lersService: LersService);
    getNodes(): Promise<{
        nodeGroups: any;
        nodes: any;
        measurePoints: any;
        equipment: any;
    }>;
}
