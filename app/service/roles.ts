import { Service } from 'egg';

/**
 * Test Service
 */
export default class Roles extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async getRolesList(limit = 20) {
    return await this.app.mysql.select('role', {
      limit
    });
  }
}
