/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CoursesController from '#controllers/courses_controller'
import HomeController from '#controllers/home_controller'
import ProjectsController from '#controllers/projects_controller'
import UnitsController from '#controllers/admin/units_controller'
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'index']).as('home')
router.get('/projets/:id', [ProjectsController, 'show']).as('projects.show')

router
  .group(() => {
    router.get('/', [HomeController, 'admin']).as('home')
    router.resource('units', UnitsController).as('units')
    router.resource('courses', CoursesController).as('courses')
    router.resource('projects', ProjectsController).as('projects')
  })
  .prefix('admin')
  .as('admin')
