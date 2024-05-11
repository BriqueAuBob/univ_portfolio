import { DateTime } from 'luxon';
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm';
import Unit from '#models/unit';
import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations';
import Project from './project.js';

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare title: string;

  @column()
  declare code: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;

  @manyToMany(() => Unit, {
    pivotTable: 'course_units',
  })
  declare units: ManyToMany<typeof Unit>;

  @hasMany(() => Project)
  declare projects: HasMany<typeof Project>;
}
