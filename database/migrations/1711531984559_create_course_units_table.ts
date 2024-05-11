import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'course_units';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('course_id').unsigned().references('id').inTable('courses').onDelete('CASCADE');
      table.integer('unit_id').unsigned().references('id').inTable('units').onDelete('CASCADE');
      table.primary(['course_id', 'unit_id']);
      table.unique(['course_id', 'unit_id']);
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
