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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LersService_lersToken;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LersService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const LERS_URL = 'http//10.192.1.4:10000/api/v1/';
let LersService = class LersService {
    constructor(httpService) {
        this.httpService = httpService;
        _LersService_lersToken.set(this, void 0);
    }
    async loginLers() {
        __classPrivateFieldSet(this, _LersService_lersToken, await this.httpService.get(`${LERS_URL}Login`), "f");
        console.log(__classPrivateFieldGet(this, _LersService_lersToken, "f"));
    }
    async getNodes() {
        console.log('INSIDE SERVICE');
        const nodesData = await this.retrieveNodesFromDb();
        return nodesData;
    }
    async getNodesFromDb() {
        return this.httpService.get(`${LERS_URL}Core/Nodes`);
    }
    async retrieveNodesFromDb() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const nodes = [
                    { name: 'asdad' },
                    { name: 'asdascsd' },
                    { name: 'asdfdfdfdfad' },
                ];
                resolve(nodes);
            }, 1000);
        });
    }
};
_LersService_lersToken = new WeakMap();
LersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], LersService);
exports.LersService = LersService;
//# sourceMappingURL=lers.service.js.map