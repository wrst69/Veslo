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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LersController = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const lers_service_1 = require("./lers.service");
let LersController = class LersController {
    constructor(lersService) {
        this.lersService = lersService;
    }
    getNodes() {
        return this.lersService.getData();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LersController.prototype, "getNodes", null);
LersController = __decorate([
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
    (0, common_1.Controller)('lers'),
    __metadata("design:paramtypes", [lers_service_1.LersService])
], LersController);
exports.LersController = LersController;
//# sourceMappingURL=lers.controller.js.map