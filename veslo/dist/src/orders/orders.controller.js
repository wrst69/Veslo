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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
const auth_guard_1 = require("../users/auth/auth.guard");
const session_info_decorator_1 = require("../users/auth/session-info.decorator");
const dto_1 = require("../users/auth/dto");
const dto_2 = require("./dto");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    getOrders() {
        return this.ordersService.getOrders();
    }
    getOrdersByUserId(session) {
        return this.ordersService.getOrdersByUserId(session.id);
    }
    createOrder(dto, session) {
        return this.ordersService.createOrder(session.id, dto);
    }
    updateOrder(dto, session) {
        return this.ordersService.updateOrder(session.id, dto);
    }
    deleteOrder(orderId) {
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, session_info_decorator_1.SessionInfo)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.getSessionInfoDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOrdersByUserId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, session_info_decorator_1.SessionInfo)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.OrderDto,
        dto_1.getSessionInfoDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, session_info_decorator_1.SessionInfo)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_2.UpdateOrderDto,
        dto_1.getSessionInfoDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "updateOrder", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "deleteOrder", null);
OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map