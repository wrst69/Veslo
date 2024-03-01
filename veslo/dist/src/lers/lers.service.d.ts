import { HttpService } from '@nestjs/axios';
import { Cache } from '@nestjs/cache-manager';
export declare class LersService {
    private cacheManager;
    private httpService;
    constructor(cacheManager: Cache, httpService: HttpService);
    private loginLers;
    private getFilteredNodes;
    private getFilteredMeasurePoints;
    private getDataFromDb;
    getData(): Promise<{
        nodeGroups: any;
        nodes: {
            id: any;
            title: any;
            address: any;
            type: any;
        }[];
        measurePoints: any;
        equipment: any;
    }>;
}
