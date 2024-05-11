import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http';
import UnitRepository from '../repositories/units.js';

@inject()
export default class HomeController {
  constructor(private unitRepository: UnitRepository) {}

  public async index({ inertia }: HttpContext) {
    return inertia.render('home', {
      units: await this.unitRepository.all(),
    });
  }

  @inject()
  public async admin({ inertia }: HttpContext) {
    return inertia.render('admin/index');
  }
}
