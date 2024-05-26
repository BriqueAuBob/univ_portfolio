import { BaseSeeder } from '@adonisjs/lucid/seeders';
import User from '#models/user';
import env from '#start/env';

export default class extends BaseSeeder {
  async run() {
    await User.create({
      email: 'brandon.clement@etudiant.univ-reims.fr',
      password: env.get('ADMIN_PASSWORD', 'admin'),
    });
  }
}
