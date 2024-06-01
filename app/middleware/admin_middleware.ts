import type { HttpContext } from '@adonisjs/core/http';
import type { NextFn } from '@adonisjs/core/types/http';

export default class AdminMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    const user = ctx.auth.user;
    if (!user || user.email !== 'brandon.clement@etudiant.univ-reims.fr') {
      return ctx.response.abort(
        {
          message: 'Unauthorized',
        },
        403
      );
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next();
    return output;
  }
}
