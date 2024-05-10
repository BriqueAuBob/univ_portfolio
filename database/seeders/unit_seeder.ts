import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Unit from '#models/unit'

export default class extends BaseSeeder {
  async run() {
    await Unit.createMany([
      { name: 'Comprendre', color: 'FF0000' },
      { name: 'Concevoir', color: '00FF00' },
      { name: 'Exprimer', color: '00F00F' },
      { name: 'Développer', color: '000FFF' },
      { name: 'Entreprendre', color: 'FF0F00' },
    ])
  }
}
