"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const jwt_guard_1 = require("../guards/jwt.guard");
const admin_guard_1 = require("../guards/admin.guard");
const user_guard_1 = require("../guards/user.guard");
const Auth = (role = client_1.Role.VIEWER) => {
    if (role === client_1.Role.ADMIN) {
        return (0, common_1.applyDecorators)((0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, admin_guard_1.OnlyAdminGuard));
    }
    if (role === client_1.Role.USER) {
        return (0, common_1.applyDecorators)((0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, user_guard_1.OnlyUserGuard));
    }
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard));
};
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map