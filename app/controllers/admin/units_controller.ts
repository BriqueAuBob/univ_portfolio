import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import UnitRepository from '../../repositories/units.js'
import { createUnit } from '#validators/unit'

@inject()
export default class UnitsController {
  constructor(private unitRepository: UnitRepository) {}

  /**
   * Display a list of resource
   */
  async index({ inertia }: HttpContext) {
    return inertia.render('admin/units/index', {
      data: await this.unitRepository.all(),
    })
  }

  /**
   * Display form to create a new record
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('admin/units/create')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    await this.unitRepository.create(await request.validateUsing(createUnit))
    return response.redirect().toRoute('admin.units.index')
  }

  /**
   * Edit individual record
   */
  async edit({ params, inertia }: HttpContext) {
    return inertia.render('admin/units/edit', {
      data: await this.unitRepository.find(params.id),
    })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    return await this.unitRepository.update(params.id, await request.validateUsing(createUnit))
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    await this.unitRepository.delete(await this.unitRepository.find(params.id))
  }
}
