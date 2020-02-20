import Router from 'koa-router';
import { isLoggedIn } from '../../../../CorsaceServer/middleware';
import { UserComment } from '../../../../CorsaceModels/MCA_AYIM/userComments';
import { isMcaStaff } from '../../../api/middleware';

const commentsReviewRouter = new Router();

commentsReviewRouter.get('/', isLoggedIn, isMcaStaff, async (ctx) => {
    const comments = await UserComment.find({
        relations: ['target', 'reviewer', 'commenter'],
    });

    ctx.body = {
        comments,
        user: ctx.state.user,
    };
});

commentsReviewRouter.post('/:id/review', isLoggedIn, isMcaStaff, async (ctx) => {
    const comment = await UserComment.findOneOrFail(ctx.params.id);
    comment.comment = ctx.request.body.comment.trim();
    comment.isValid = ctx.request.body.isValid;
    comment.reviewer = ctx.state.user;
    await comment.save();

    ctx.body = comment;
});

commentsReviewRouter.post('/:id/remove', isLoggedIn, isMcaStaff, async (ctx) => {
    const comment = await UserComment.findOneOrFail(ctx.params.id);
    await comment.remove();

    ctx.body = {
        success: 'ok',
    };
});

export default commentsReviewRouter;
