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
exports.NodesController = void 0;
const common_1 = require("@nestjs/common");
const auth_____guard_1 = require("../users/auth/guards/auth????.guard");
const nodes_service_1 = require("./nodes.service");
let NodesController = class NodesController {
    constructor(nodesService) {
        this.nodesService = nodesService;
    }
    createNode() { }
    updateNode() { }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NodesController.prototype, "createNode", null);
__decorate([
    (0, common_1.Patch)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NodesController.prototype, "updateNode", null);
NodesController = __decorate([
    (0, common_1.Controller)('nodes'),
    (0, common_1.UseGuards)(auth_____guard_1.AuthGuard),
    __metadata("design:paramtypes", [nodes_service_1.NodesService])
], NodesController);
exports.NodesController = NodesController;
//# sourceMappingURL=nodes.controller.js.map