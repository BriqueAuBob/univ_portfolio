import { DateTime } from 'luxon';
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm';
import Course from './course.js';
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations';
import CustomText from '#models/custom_text';

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

  @hasMany(() => CustomText)
  declare customTexts: HasMany<typeof CustomText>;
}
