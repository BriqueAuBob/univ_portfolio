import { BaseSeeder } from '@adonisjs/lucid/seeders';
import User from '#models/user';
import env from '#start/env';

export default class extends BaseSeeder {
  async run() {
    await User.updateOrCreate(
      {
        email: 'brandon.clement@etudiant.univ-reims.fr',
      },
      {
        email: 'brandon.clement@etudiant.univ-reims.fr',
        password: env.get('ADMIN_PASSWORD', 'admin'),
      }
    );

    await User.updateOrCreate(
      {
        email: 'prof@mmi-troyes.fr',
      },
      {
        email: 'prof@mmi-troyes.fr',
        password: env.get('PROF_PASSWORD', 'prof'),
      }
    );
  }
}
