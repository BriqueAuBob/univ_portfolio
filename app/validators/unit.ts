import vine from '@vinejs/vine';

export const createUnit = vine.compile(
  vine.object({
    name: vine
      .string()
      .maxLength(255)
      .unique(async (db, value) => {
        return !(await db.from('units').where('name', value).first());
      }),
    color: vine.string().maxLength(6),
  })
);
