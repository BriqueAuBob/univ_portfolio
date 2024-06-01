import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'custom_texts';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.integer('project_id').unsigned().references('id').inTable('projects').onDelete('CASCADE');
      table.integer('unit_id').unsigned().references('id').inTable('units').onDelete('CASCADE');
      table.text('text');
      table.timestamp('created_at');
      table.timestamp('updated_at');
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
