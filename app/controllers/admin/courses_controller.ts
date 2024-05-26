import type { HttpContext } from '@adonisjs/core/http';
import ProjectsRepository from '../../repositories/projects.js';
import { inject } from '@adonisjs/core';
import createProjectValidator from '#validators/project';
import { cuid } from '@adonisjs/core/helpers';
import { MultipartFile } from '@adonisjs/core/bodyparser';
import CoursesRepository from '../../repositories/courses.js';

@inject()
export default class ProjectsController {
  constructor(
    private projectsRepository: ProjectsRepository,
    private coursesRepository: CoursesRepository
  ) {}

  private async handleFileUpload(image: MultipartFile, path: string = 'uploads') {
    await image.move(path, {
      name: 'project-' + cuid() + '.' + image.extname,
    });
    return image.fileName as unknown as any;
  }

  public async index({ inertia }: HttpContext) {
    return inertia.render('admin/projects/index', {
      data: await this.projectsRepository.all(),
    });
  }

  public async create({ inertia }: HttpContext) {
    return inertia.render('admin/projects/create', {
      courses: await this.coursesRepository.all(),
    });
  }

  public async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createProjectValidator);
    const image = payload.image;
    if (image) {
      payload.image = await this.handleFileUpload(image);
    }

    await this.projectsRepository.create(payload);
    response.redirect().toRoute('admin.projects.index');
  }

  public async show({ params, inertia }: HttpContext) {
    return inertia.render('admin/projects/show', {
      project: await this.projectsRepository.show(params.id),
    });
  }

  public async edit({ params, inertia }: HttpContext) {
    return inertia.render('admin/projects/edit', {
      project: await this.projectsRepository.show(params.id),
      courses: await this.coursesRepository.all(),
    });
  }

  public async update({ request, response, params }: HttpContext) {
    const payload = await request.validateUsing(createProjectValidator);

    const image = payload.image;
    if (image) {
      payload.image = await this.handleFileUpload(image);
    }

    await this.projectsRepository.update(params.id, payload);
    return response.redirect().toRoute('admin.projects.index');
  }
}
