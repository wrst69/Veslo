import { HttpService } from '@nestjs/axios';
export declare class LersService {
    #private;
    private httpService;
    constructor(httpService: HttpService);
    loginLers(): Promise<void>;
    getNodes(): Promise<unknown>;
    getNodesFromDb(): Promise<import("rxjs").Observable<import("axios").AxiosResponse<any, any>>>;
    retrieveNodesFromDb(): Promise<unknown>;
}
