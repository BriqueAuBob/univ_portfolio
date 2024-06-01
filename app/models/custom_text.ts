import { DateTime } from 'luxon';
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm';
import Unit from '#models/unit';
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import Project from '#models/project';

export default class CustomText extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare unitId: number;

  @column()
  declare projectId: number;

  @belongsTo(() => Unit)
  declare unit: BelongsTo<typeof Unit>;

  @belongsTo(() => Project)
  declare project: BelongsTo<typeof Project>;

  @column()
  declare text: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}
