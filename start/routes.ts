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
import AdminCoursesController from '#controllers/admin/courses_controller';
import router from '@adonisjs/core/services/router';
import app from '@adonisjs/core/services/app';
import { middleware } from './kernel.js';

router.get('/', [HomeController, 'index']).as('home').middleware(middleware.auth());

router
  .group(() => {
    router.get('/', [HomeController, 'admin']).as('home');
    router.resource('units', AdminUnitsController).as('units');
    router.resource('projects', AdminProjectsController).as('projects');
    router.resource('courses', AdminCoursesController).as('courses');
    router.post('upload', [HomeController, 'upload']).as('upload');
  })
  .prefix('admin')
  .as('admin')
  .middleware(middleware.auth())
  .middleware(middleware.admin());

router
  .get('/uploads/:path', async ({ params, response }) => {
    return response.download(app.makePath('../uploads', params.path));
  })
  .as('uploads');
