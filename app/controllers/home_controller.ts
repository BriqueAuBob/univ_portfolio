import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http';
import UnitRepository from '../repositories/units.js';
import app from '@adonisjs/core/services/app';
import uploadValidator from '#validators/upload';
import { MultipartFile } from '@adonisjs/core/bodyparser';
import { cuid } from '@adonisjs/core/helpers';
import router from '@adonisjs/core/services/router';

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

  public async upload({ request, response }: HttpContext) {
    const payload = await request.validateUsing(uploadValidator);
    const file = payload.file as MultipartFile;

    let baseClientName = file.clientName.split('.')[0];
    baseClientName = baseClientName.replaceAll(/[^a-zA-Z0-9]/g, '_');

    const fileName = baseClientName + cuid() + '.' + file.extname;
    await file.move(app.makePath('../uploads'), {
      name: fileName,
    });

    return response.json({
      path: fileName,
      url: router
        .builder()
        .params({
          path: fileName,
        })
        .make('uploads'),
    });
  }
}
