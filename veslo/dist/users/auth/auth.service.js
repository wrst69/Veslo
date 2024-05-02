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
        this.EXPIRE_DAY_REFRESH_TOKEN = 1;
        this.REFRESH_TOKEN_NAME = 'refreshToken';
    }
    async signUp(login, name, role, password) {
        const user = await this.usersService.findByLogin(login);
        if (user) {
            throw new common_1.BadRequestException({ type: 'login-exists' });
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
    async signIn(dto) {
        const user = await this.usersService.findByLogin(dto.login);
        if (!user) {
            throw new common_1.UnauthorizedException('Credentials is invalid');
        }
        const hash = this.passwordService.getHash(dto.password, user.salt);
        if (hash !== user.hash) {
            throw new common_1.UnauthorizedException('Credentials is invalid');
        }
        const tokens = await this.issueTokens(user.id, user.role);
        return Object.assign({ user }, tokens);
    }
    async getNewTokens(refreshToken) {
        const result = await this.jwtService.verifyAsync(refreshToken);
        if (!result) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
        const user = await this.usersService.findById(result.id);
        if (!user) {
            throw new common_1.UnauthorizedException('User does not exists');
        }
        const tokens = await this.issueTokens(user.id, user.role);
        return Object.assign({ user }, tokens);
    }
    async issueTokens(userId, role) {
        const data = { id: userId, role };
        const accessToken = this.jwtService.sign(data, {
            expiresIn: '1m',
        });
        const refreshToken = this.jwtService.sign(data, {
            expiresIn: '7d',
        });
        return { accessToken, refreshToken };
    }
    addRefreshTokenToResponse(res, refreshToken) {
        const expiresIn = new Date();
        expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN);
        res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
            httpOnly: true,
            domain: 'localhost',
            expires: expiresIn,
            secure: true,
            sameSite: 'none',
        });
    }
    removeRefreshTokenFromResponse(res) {
        res.cookie(this.REFRESH_TOKEN_NAME, '', {
            httpOnly: true,
            domain: 'localhost',
            expires: new Date(0),
            secure: true,
            sameSite: 'none',
        });
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