import vine from '@vinejs/vine';

export default vine.compile(
  vine.object({
    file: vine.file({
      size: '10mb',
      extnames: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'mp4', 'pdf', 'json', 'rar', 'zip'],
    }),
  })
);
