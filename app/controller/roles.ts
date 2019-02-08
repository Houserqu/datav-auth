import { createRoleObj } from './../model/role';
import { Controller } from 'egg';

export default class RoleController extends Controller {
  // 资源列表
  public async index() {
    const { ctx: { helper, service, query } } = this;
    const res = await service.roles.getRolesList(parseInt(query.pageSize), parseInt(query.page || 1));

    if (res) {
      helper.resSuccess(res);
    } else {
      helper.resError('获取资源列表失败')
    }
  }

  // 单个资源
  public async show() {
    const { ctx: { helper, service, params } } = this;
    const res = await service.roles.getRole(parseInt(params.id));

    if (res) {
      helper.resSuccess(res);
    } else {
      helper.resError('获取失败')
    }
  }

  // 创建资源
  public async create() {
    const { ctx: { helper, request, service } } = this;
    let newRole: createRoleObj = {
      name: request.body.name,
      code: request.body.code
    }

    const res = await service.roles.createRole(newRole);

    if (res.affectedRows > 0) {
      helper.resSuccess(res.insertId);
    } else {
      helper.resError('创建失败')
    }
  }

  // 删除资源
  public async destroy() {
    const { ctx: { helper, service, params } } = this;

    const res = await service.roles.delRole(params.id);

    if (res.affectedRows > 0) {
      helper.resSuccess(params.id);
    } else {
      helper.resError('删除失败')
    }
  }

  // 更新资源
  public async update() {
    const { ctx: { helper, request, service, params } } = this;
    let updateRole: createRoleObj = request.body;
    updateRole.id = parseInt(params.id);

    const res = await service.roles.updateRole(updateRole);

    if (res.affectedRows > 0) {
      helper.resSuccess(params.id);
    } else {
      helper.resError('更新失败')
    }
  }
}
