import User from '#models/user';
import { BaseCommand, flags } from '@adonisjs/core/ace';
import type { CommandOptions } from '@adonisjs/core/types/ace';

export default class CreateUser extends BaseCommand {
  static commandName = 'create:user';
  static description = '';

  static options: CommandOptions = {
    startApp: true,
  };

  @flags.string({
    description: 'Email of the user to create',
    required: true,
    alias: 'e',
  })
  declare email: string;

  @flags.string({
    description: 'Password for the user',
    required: true,
    alias: 'p',
  })
  declare password: string;

  async run() {
    this.logger.info('Creating user with the provided email and password');

    try {
      await User.updateOrCreate(
        { email: this.email },
        {
          email: this.email,
          password: this.password,
        }
      );
      this.logger.info('User created successfully');
    } catch (err) {
      this.logger.error('Error creating user');
      console.error(err);
      return;
    }
  }
}
