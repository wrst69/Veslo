import { LersService } from './lers.service';
export declare class LersController {
    private lersService;
    constructor(lersService: LersService);
    getNodes(): Promise<any>;
}
