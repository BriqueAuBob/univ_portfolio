import { BaseSeeder } from '@adonisjs/lucid/seeders';
import Unit from '#models/unit';

export default class extends BaseSeeder {
  async run() {
    await Unit.createMany([
      { name: 'Comprendre', color: 'fe4a49' },
      { name: 'Concevoir', color: 'ffad69' },
      { name: 'Exprimer', color: 'f4d35e' },
      { name: 'Développer', color: '21d19f' },
      { name: 'Entreprendre', color: '5887ff' },
    ]);
  }
}
