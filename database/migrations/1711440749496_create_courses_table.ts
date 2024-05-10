import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'courses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 255).notNullable()
      table.string('code', 8).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.unique(['title', 'code'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
