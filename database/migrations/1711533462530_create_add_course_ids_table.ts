import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'projects';

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('course_id').unsigned().references('id').inTable('courses').onDelete('CASCADE');
    });
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('course_id');
    });
  }
}
