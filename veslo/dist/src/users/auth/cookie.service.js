"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CookieService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieService = void 0;
const common_1 = require("@nestjs/common");
let CookieService = CookieService_1 = class CookieService {
    setToken(res, token) {
        res.cookie(CookieService_1.tokenKey, token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
    }
    removeToken(res) {
        res.clearCookie(CookieService_1.tokenKey);
    }
};
CookieService.tokenKey = 'access-token';
CookieService = CookieService_1 = __decorate([
    (0, common_1.Injectable)()
], CookieService);
exports.CookieService = CookieService;
//# sourceMappingURL=cookie.service.js.map