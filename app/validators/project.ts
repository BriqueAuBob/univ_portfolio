import vine from '@vinejs/vine';

const createProjectValidator = vine.compile(
  vine.object({
    name: vine.string(),
    description: vine.string().optional(),
    content: vine.string(),
    image: vine
      .file({
        size: '2mb',
        extnames: ['jpg', 'png', 'jpeg', 'webp'],
      })
      .optional(),
    courseId: vine.number().exists(async (db, value) => {
      const course = await db.from('courses').where('id', value).first();
      return course ? true : false;
    }),
    createdAt: vine.date().optional(),
  })
);

export default createProjectValidator;
