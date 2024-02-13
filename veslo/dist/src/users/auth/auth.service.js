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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users.service");
const password_service_1 = require("./password.service");
let AuthService = class AuthService {
    constructor(usersService, passwordService, jwtService) {
        this.usersService = usersService;
        this.passwordService = passwordService;
        this.jwtService = jwtService;
    }
    async signUp(name, role, password) {
        const user = await this.usersService.findByName(name);
        if (user) {
            throw new common_1.BadRequestException({ type: 'email-exists' });
        }
        const salt = this.passwordService.getSalt();
        const hash = this.passwordService.getHash(password, salt);
        const newUser = await this.usersService.create(name, role, hash, salt);
        const accesToken = await this.jwtService.signAsync({
            id: newUser.id,
            name: newUser.name,
        });
        return { accesToken };
    }
    async signIn(name, password) {
        const user = await this.usersService.findByName(name);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const hash = this.passwordService.getHash(password, user.salt);
        if (hash !== user.hash) {
            throw new common_1.UnauthorizedException();
        }
        const accesToken = await this.jwtService.signAsync({
            id: user.id,
            name: user.name,
        });
        return { accesToken };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        password_service_1.PasswordService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map