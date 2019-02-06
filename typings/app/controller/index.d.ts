// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportRoles from '../../../app/controller/roles';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    roles: ExportRoles;
  }
}
