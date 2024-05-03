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
exports.AuthTestController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_test_service_1 = require("./auth-test.service");
const dto_1 = require("./dto");
const cookie_service_1 = require("./cookie.service");
const session_info_decorator_1 = require("./session-info.decorator");
const users_test_service_1 = require("../users-test/users-test.service");
const auth_test_guard_1 = require("./auth-test.guard");
let AuthTestController = class AuthTestController {
    constructor(authService, cookieService, usersService) {
        this.authService = authService;
        this.cookieService = cookieService;
        this.usersService = usersService;
    }
    async signUp(body, res) {
        const { accessToken } = await this.authService.signUp(body.login, body.name, body.role, body.password);
        this.cookieService.setToken(res, accessToken);
    }
    async signIn(body, res) {
        const { accessToken } = await this.authService.signIn(body.login, body.password);
        this.cookieService.setToken(res, accessToken);
    }
    signOut(res) {
        this.cookieService.removeToken(res);
    }
    getSessionInfo(session) {
        return session;
    }
};
__decorate([
    (0, common_1.Post)('sign-up'),
    (0, swagger_1.ApiCreatedResponse)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignUpBodyDto, Object]),
    __metadata("design:returntype", Promise)
], AuthTestController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('sign-in'),
    (0, swagger_1.ApiOkResponse)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignInBodyDto, Object]),
    __metadata("design:returntype", Promise)
], AuthTestController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('sign-out'),
    (0, swagger_1.ApiOkResponse)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_test_guard_1.AuthGuard),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthTestController.prototype, "signOut", null);
__decorate([
    (0, common_1.Get)('session'),
    (0, swagger_1.ApiOkResponse)({
        type: dto_1.GetSessionInfoDto,
    }),
    (0, common_1.UseGuards)(auth_test_guard_1.AuthGuard),
    __param(0, (0, session_info_decorator_1.SessionInfo)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetSessionInfoDto]),
    __metadata("design:returntype", void 0)
], AuthTestController.prototype, "getSessionInfo", null);
AuthTestController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_test_service_1.AuthTestService,
        cookie_service_1.CookieService,
        users_test_service_1.UserTestService])
], AuthTestController);
exports.AuthTestController = AuthTestController;
//# sourceMappingURL=auth-test.controller.js.map