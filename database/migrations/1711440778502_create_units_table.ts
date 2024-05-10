import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'units'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 255).notNullable()
      table.string('color', 6).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.unique(['name'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
