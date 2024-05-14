import { DateTime } from 'luxon';
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm';
import Course from './course.js';
import type { BelongsTo } from '@adonisjs/lucid/types/relations';

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare name: string;

  @column()
  declare description: string;

  @column()
  declare content: string;

  @column()
  declare image: string;

  @column()
  declare courseId: number;

  @belongsTo(() => Course)
  declare course: BelongsTo<typeof Course>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}
