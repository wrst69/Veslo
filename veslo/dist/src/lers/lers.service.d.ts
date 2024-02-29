import { HttpService } from '@nestjs/axios';
import { Cache } from '@nestjs/cache-manager';
export declare class LersService {
    private cacheManager;
    private httpService;
    constructor(cacheManager: Cache, httpService: HttpService);
    private loginLers;
    private getNodesFromDb;
    getNodes(): Promise<{
        nodeGroups: any;
        nodes: any;
        measurePoints: any;
        equipment: any;
    }>;
}
