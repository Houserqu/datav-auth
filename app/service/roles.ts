import { Service } from 'egg';
import { createRoleObj } from './../model/role';

/**
 * Test Service
 */
export default class Roles extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async getRolesList(limit = 20, page = 1) {
    return await this.app.mysql.select('role', {
      limit: limit,
      offset: (page - 1) * limit
    });
  }

  public async getRole(id: number) {
    console.log(id)
    return await this.app.mysql.get('role', { id });
  }

  public async createRole(role: createRoleObj) {
    return await this.app.mysql.insert('role', role);
  }

  public async delRole(id: number) {
    return await this.app.mysql.delete('role', { id });
  }

  public async updateRole(role: createRoleObj) {
    return await this.app.mysql.update('role', role);
  }
}
