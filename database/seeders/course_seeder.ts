import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Course from '#models/course'

export default class extends BaseSeeder {
  async run() {
    await Course.createMany([
      {
        title: 'Développement front',
        code: 'WRA406D',
      },
      {
        title: 'Développement back',
        code: 'WRA407D',
      },
      {
        title: 'Déploiement de services',
        code: 'WRA408D',
      },
    ])
  }
}
