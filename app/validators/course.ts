import vine from '@vinejs/vine';

const createCourseValidator = vine.compile(
  vine.object({
    title: vine.string(),
    code: vine.string(),
    units: vine.array(vine.number()).optional(),
  })
);

export default createCourseValidator;
