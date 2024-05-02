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
exports.getSessionInfoDto = exports.SignInBodyDto = exports.SignUpBodyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_validator_1 = require("class-validator");
class SignUpBodyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'FedorovAY',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpBodyDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Иванов Иван Иванович',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpBodyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'viewer',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpBodyDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123456',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpBodyDto.prototype, "password", void 0);
exports.SignUpBodyDto = SignUpBodyDto;
class SignInBodyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'FedorovAY',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignInBodyDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123456',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignInBodyDto.prototype, "password", void 0);
exports.SignInBodyDto = SignInBodyDto;
class getSessionInfoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
    }),
    __metadata("design:type", Number)
], getSessionInfoDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'FedorovAY',
    }),
    __metadata("design:type", String)
], getSessionInfoDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], getSessionInfoDto.prototype, "ist", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], getSessionInfoDto.prototype, "exp", void 0);
exports.getSessionInfoDto = getSessionInfoDto;
//# sourceMappingURL=dto.js.map