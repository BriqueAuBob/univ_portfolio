import type { HttpContext } from '@adonisjs/core/http';
import ProjectsRepository from '../repositories/projects.js';
import { inject } from '@adonisjs/core';

@inject()
export default class ProjectsController {
  constructor(private projectsRepository: ProjectsRepository) {}

  public async show({ params, inertia }: HttpContext) {
    return inertia.render('projects/show', {
      project: await this.projectsRepository.show(params.id),
    });
  }

  public async create({ inertia }: HttpContext) {
    return inertia.render('projects/create');
  }
}
