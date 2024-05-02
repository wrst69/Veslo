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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
let UsersService = class UsersService {
    constructor(db) {
        this.db = db;
    }
    async findByLogin(login) {
        return this.db.user.findUnique({ where: { login } });
    }
    async findById(id) {
        return this.db.user.findUnique({ where: { id } });
    }
    async create(login, name, role, hash, salt) {
        return this.db.user.create({ data: { login, name, role, hash, salt } });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map