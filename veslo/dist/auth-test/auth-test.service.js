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
exports.AuthTestService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const password_service_1 = require("./password.service");
const users_test_service_1 = require("../users-test/users-test.service");
let AuthTestService = class AuthTestService {
    constructor(usersService, passwordService, jwtService) {
        this.usersService = usersService;
        this.passwordService = passwordService;
        this.jwtService = jwtService;
        this.EXPIRE_DAY_REFRESH_TOKEN = 1;
        this.REFRESH_TOKEN_NAME = 'refreshToken';
    }
    async signIn(email, password) {
        const user = await this.usersService.findByLogin(email);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const hash = this.passwordService.getHash(password, user.salt);
        if (hash !== user.hash) {
            throw new common_1.UnauthorizedException();
        }
        const accessToken = await this.jwtService.signAsync({
            id: user.id,
            login: user.login,
        });
        return { accessToken, user };
    }
    async signUp(login, name, role, password) {
        const user = await this.usersService.findByLogin(login);
        if (user) {
            throw new common_1.BadRequestException({ type: 'email-exists' });
        }
        const salt = this.passwordService.getSalt();
        const hash = this.passwordService.getHash(password, salt);
        const newUser = await this.usersService.create(login, name, role, hash, salt);
        const accessToken = await this.jwtService.signAsync({
            id: newUser.id,
            login: newUser.login,
        });
        return { accessToken };
    }
};
AuthTestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_test_service_1.UserTestService,
        password_service_1.PasswordService,
        jwt_1.JwtService])
], AuthTestService);
exports.AuthTestService = AuthTestService;
//# sourceMappingURL=auth-test.service.js.map