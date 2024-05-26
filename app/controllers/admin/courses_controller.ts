import type { HttpContext } from '@adonisjs/core/http';
import { inject } from '@adonisjs/core';
import createCourseValidator from '#validators/course';
import CoursesRepository from '../../repositories/courses.js';
import UnitRepository from '../../repositories/units.js';

@inject()
export default class CoursesController {
  constructor(
    private coursesRepository: CoursesRepository,
    private unitRepository: UnitRepository
  ) {}

  public async index({ inertia }: HttpContext) {
    return inertia.render('admin/courses/index', {
      data: await this.coursesRepository.all(),
    });
  }

  public async create({ inertia }: HttpContext) {
    return inertia.render('admin/courses/create', {
      units: await this.unitRepository.all(),
    });
  }

  public async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createCourseValidator);

    await this.coursesRepository.create(payload);
    response.redirect().toRoute('admin.courses.index');
  }

  public async show({ params, inertia }: HttpContext) {
    return inertia.render('admin/courses/show', {
      project: await this.coursesRepository.show(params.id),
    });
  }

  public async edit({ params, inertia }: HttpContext) {
    const course = await this.coursesRepository.show(params.id);
    await course.load('units');
    return inertia.render('admin/courses/edit', {
      course,
      units: await this.unitRepository.all(),
    });
  }

  public async update({ request, response, params }: HttpContext) {
    const payload = await request.validateUsing(createCourseValidator);

    await this.coursesRepository.update(params.id, payload);
    return response.redirect().toRoute('admin.courses.index');
  }

  public async destroy({ response, params }: HttpContext) {
    await this.coursesRepository.delete(params.id);
    return response.redirect().toRoute('admin.courses.index');
  }
}
