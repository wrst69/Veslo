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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let OrdersService = class OrdersService {
    constructor(db) {
        this.db = db;
    }
    async getOrders() {
        return await this.db.order.findMany();
    }
    async getOrdersByUserId(userId) {
        return await this.db.order.findMany({ where: { ownerId: userId } });
    }
    async createOrder(userId, dto) {
        return await this.db.order.create({ data: Object.assign(Object.assign({}, dto), { ownerId: userId }) });
    }
    async updateOrder(userId, dto) {
        return await this.db.order.update({
            where: { id: dto.id },
            data: Object.assign(Object.assign({}, dto), { ownerId: userId }),
        });
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map