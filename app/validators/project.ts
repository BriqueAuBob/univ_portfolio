import vine from "@vinejs/vine";

const createProjectValidator = vine.compile(vine.object({
    name: vine.string(),
    description: vine.string().optional(),
    content: vine.string(),
    image: vine.file({
        size: '2mb',
        extnames: ['jpg', 'png', 'jpeg', 'webp'],
    }).optional(),
}))

export default createProjectValidator;