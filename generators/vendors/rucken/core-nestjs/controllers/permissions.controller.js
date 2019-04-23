"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const core_config_1 = require("../configs/core.config");
const permissions_decorator_1 = require("../decorators/permissions.decorator");
const roles_decorator_1 = require("../decorators/roles.decorator");
const in_permission_dto_1 = require("../dto/in-permission.dto");
const out_permission_dto_1 = require("../dto/out-permission.dto");
const out_permissions_dto_1 = require("../dto/out-permissions.dto");
const permission_entity_1 = require("../entities/permission.entity");
const parse_int_with_default_pipe_1 = require("../pipes/parse-int-with-default.pipe");
const permissions_service_1 = require("../services/permissions.service");
let PermissionsController = class PermissionsController {
    constructor(coreConfig, service) {
        this.coreConfig = coreConfig;
        this.service = service;
    }
    create(dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return class_transformer_1.plainToClass(out_permission_dto_1.OutPermissionDto, yield this.service.create({
                    item: class_transformer_1.plainToClass(permission_entity_1.Permission, dto)
                }));
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(id, dto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.coreConfig.demo) {
                throw new common_1.MethodNotAllowedException('Not allowed in DEMO mode');
            }
            try {
                return class_transformer_1.plainToClass(out_permission_dto_1.OutPermissionDto, yield this.service.update({
                    id,
                    item: class_transformer_1.plainToClass(permission_entity_1.Permission, dto)
                }));
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.coreConfig.demo) {
                throw new common_1.MethodNotAllowedException('Not allowed in DEMO mode');
            }
            try {
                return class_transformer_1.plainToClass(out_permission_dto_1.OutPermissionDto, yield this.service.delete({
                    id
                }));
            }
            catch (error) {
                throw error;
            }
        });
    }
    findById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return class_transformer_1.plainToClass(out_permission_dto_1.OutPermissionDto, yield this.service.findById({
                    id
                }));
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAll(curPage, perPage, q, group, contentType, sort) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return class_transformer_1.plainToClass(out_permissions_dto_1.OutPermissionsDto, yield this.service.findAll({
                    curPage,
                    perPage,
                    q,
                    sort,
                    group,
                    contentType
                }));
            }
            catch (error) {
                throw error;
            }
        });
    }
};
tslib_1.__decorate([
    roles_decorator_1.Roles('isSuperuser'),
    permissions_decorator_1.Permissions('add_permission'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.CREATED,
        type: out_permission_dto_1.OutPermissionDto,
        description: 'The record has been successfully created.'
    }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: 'Forbidden.' }),
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [in_permission_dto_1.InPermissionDto]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsController.prototype, "create", null);
tslib_1.__decorate([
    roles_decorator_1.Roles('isSuperuser'),
    permissions_decorator_1.Permissions('change_permission'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: out_permission_dto_1.OutPermissionDto,
        description: 'The record has been successfully updated.'
    }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: 'Forbidden.' }),
    swagger_1.ApiImplicitParam({ name: 'id', type: Number }),
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id', new common_1.ParseIntPipe())), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, in_permission_dto_1.InPermissionDto]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsController.prototype, "update", null);
tslib_1.__decorate([
    roles_decorator_1.Roles('isSuperuser'),
    permissions_decorator_1.Permissions('delete_permission'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'The record has been successfully deleted.'
    }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: 'Forbidden.' }),
    swagger_1.ApiImplicitParam({ name: 'id', type: Number }),
    common_1.Delete(':id'),
    tslib_1.__param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsController.prototype, "delete", null);
tslib_1.__decorate([
    roles_decorator_1.Roles('isSuperuser'),
    permissions_decorator_1.Permissions('read_permission'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: out_permission_dto_1.OutPermissionDto,
        description: ''
    }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: 'Forbidden.' }),
    swagger_1.ApiImplicitParam({ name: 'id', type: Number }),
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id', new common_1.ParseIntPipe())),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsController.prototype, "findById", null);
tslib_1.__decorate([
    roles_decorator_1.Roles('isSuperuser'),
    permissions_decorator_1.Permissions('read_permission'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: out_permissions_dto_1.OutPermissionsDto,
        description: ''
    }),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.FORBIDDEN, description: 'Forbidden.' }),
    swagger_1.ApiImplicitQuery({
        name: 'q',
        required: false,
        type: String,
        description: 'Text for search (default: empty)'
    }),
    swagger_1.ApiImplicitQuery({
        name: 'sort',
        required: false,
        type: String,
        description: 'Column name for sort (default: -id)'
    }),
    swagger_1.ApiImplicitQuery({
        name: 'per_page',
        required: false,
        type: Number,
        description: 'Number of results to return per page. (default: 10)'
    }),
    swagger_1.ApiImplicitQuery({
        name: 'cur_page',
        required: false,
        type: Number,
        description: 'A page number within the paginated result set. (default: 1)'
    }),
    swagger_1.ApiImplicitQuery({
        name: 'group',
        required: false,
        type: Number,
        description: 'Group id for filter data by group. (default: empty)'
    }),
    swagger_1.ApiImplicitQuery({
        name: 'content_type',
        required: false,
        type: Number,
        description: 'Content type id for filter data by content type. (default: empty)'
    }),
    common_1.Get(),
    tslib_1.__param(0, common_1.Query('cur_page', new parse_int_with_default_pipe_1.ParseIntWithDefaultPipe(1))),
    tslib_1.__param(1, common_1.Query('per_page', new parse_int_with_default_pipe_1.ParseIntWithDefaultPipe(10))),
    tslib_1.__param(2, common_1.Query('q')),
    tslib_1.__param(3, common_1.Query('group')),
    tslib_1.__param(4, common_1.Query('content_type')),
    tslib_1.__param(5, common_1.Query('sort')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsController.prototype, "findAll", null);
PermissionsController = tslib_1.__decorate([
    swagger_1.ApiUseTags('permissions'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('/api/permissions'),
    tslib_1.__param(0, common_1.Inject(core_config_1.CORE_CONFIG_TOKEN)),
    tslib_1.__metadata("design:paramtypes", [Object, permissions_service_1.PermissionsService])
], PermissionsController);
exports.PermissionsController = PermissionsController;
//# sourceMappingURL=permissions.controller.js.map