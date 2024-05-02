"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyUserGuard = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
class OnlyUserGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (user.role !== client_1.Role.USER) {
            throw new common_1.ForbiddenException('У вас нет прав!');
        }
        return true;
    }
}
exports.OnlyUserGuard = OnlyUserGuard;
//# sourceMappingURL=user.guard.js.map