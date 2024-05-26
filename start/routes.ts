/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import HomeController from '#controllers/home_controller';
import AdminProjectsController from '#controllers/admin/projects_controller';
import AdminUnitsController from '#controllers/admin/units_controller';
import router from '@adonisjs/core/services/router';

router.get('/', [HomeController, 'index']).as('home');

router
  .group(() => {
    router.get('/', [HomeController, 'admin']).as('home');
    router.resource('units', AdminUnitsController).as('units');
    router.resource('projects', AdminProjectsController).as('projects');
  })
  .prefix('admin')
  .as('admin');
