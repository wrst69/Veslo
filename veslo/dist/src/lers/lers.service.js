"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LersService = void 0;
const axios_1 = require("@nestjs/axios");
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const LERS_URL = 'http://10.192.1.4:10000/api/v1/';
let LersService = class LersService {
    constructor(cacheManager, httpService) {
        this.cacheManager = cacheManager;
        this.httpService = httpService;
    }
    async loginLers() {
        const account = {
            login: 'api1',
            password: '123451234512345',
            application: 'Veslo',
        };
        const token = await (0, rxjs_1.lastValueFrom)(this.httpService
            .post(`${LERS_URL}Login`, account)
            .pipe((0, operators_1.map)((res) => res.data.token)));
        return token;
    }
    async getFilteredNodes(token) {
        const nodes = await (0, rxjs_1.lastValueFrom)(this.httpService
            .get(`${LERS_URL}Core/Nodes`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .pipe((0, operators_1.map)((res) => res.data)));
        const filteredNodes = [];
        nodes.nodes.map((node) => filteredNodes.push({
            id: node.id,
            title: node.title,
            address: node.address,
            type: node.type,
        }));
        return filteredNodes;
    }
    async getFilteredMeasurePoints(token) {
        const data = await (0, rxjs_1.lastValueFrom)(this.httpService
            .get(`${LERS_URL}Core/MeasurePoints`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                getEquipment: true,
            },
        })
            .pipe((0, operators_1.map)((res) => res.data)));
        const measurePoints = data.measurePoints.map((point) => {
            return {
                id: point.id,
                title: point.title,
                fullTitle: point.fullTitle,
                address: point.address,
                type: point.type,
                systemType: point.systemType,
                nodeId: point.nodeId,
                isDoublePipeHotWaterSystem: point.isDoublePipeHotWaterSystem,
                isTwoChannels: point.isTwoChannels,
                resourceKind: point.resourceKind,
                deviceId: point.deviceId,
            };
        });
        return measurePoints;
    }
    async getDataFromDb() {
        const token = await this.loginLers();
        const nodeGroups = await (0, rxjs_1.lastValueFrom)(this.httpService
            .get(`${LERS_URL}Core/NodeGroups`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .pipe((0, operators_1.map)((res) => res.data)));
        const nodes = await this.getFilteredNodes(token);
        const measurePoints = await this.getFilteredMeasurePoints(token);
        const equipment = await (0, rxjs_1.lastValueFrom)(this.httpService
            .get(`${LERS_URL}Core/Equipment`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .pipe((0, operators_1.map)((res) => res.data)));
        return { nodeGroups, nodes, measurePoints, equipment };
    }
    async getData() {
        return await this.getDataFromDb();
    }
    async getMeasurePointEquipment(id) {
        return;
    }
};
LersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CACHE_MANAGER')),
    __metadata("design:paramtypes", [cache_manager_1.Cache,
        axios_1.HttpService])
], LersService);
exports.LersService = LersService;
//# sourceMappingURL=lers.service.js.map