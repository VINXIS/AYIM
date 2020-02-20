import Router from 'koa-router';
import { isLoggedIn } from '../../../CorsaceServer/middleware';
import { UserComment, ModeDivision } from '../../../CorsaceModels/MCA_AYIM/userComments';
import { User } from '../../../CorsaceModels/user';

async function isOwnerComment(ctx, next): Promise<any> {
    const comment = await UserComment.findOneOrFail(ctx.params.id);

    if (comment.commenterID !== ctx.state.user.ID) {
        return ctx.body = {
            error: 'Not your comment',
        }
    }

    ctx.state.comment = comment;
    await next();
}

const commentsRouter = new Router();

commentsRouter.get('/', isLoggedIn, async (ctx) => {
    const comments = await UserComment.find({
        where: {
            commenter: ctx.state.user,
        },
        relations: ['target'],
    });

    ctx.body = {
        comments,
        user: ctx.state.user,
    };
});

commentsRouter.post('/create', isLoggedIn, async (ctx) => {
    const newComment: string = ctx.request.body.comment.trim();
    const modeKey: keyof typeof ModeDivision = ctx.request.body.mode;
    
    if (!newComment || !modeKey) {
        return ctx.body = {
            error: 'Missing data',
        }
    }

    if (ctx.request.body.target == ctx.state.user.ID) {
        return ctx.body = {
            error: `It's yourself`,
        }
    }

    const target = await User.findOne(ctx.request.body.target);

    if (!target) {
        return ctx.body = {
            error: 'User not found',
        }
    }
    
    const mode = ModeDivision[modeKey];
    const hasCommented = await UserComment.findOne({
        target,
        mode,
    });

    if (hasCommented) {
        return ctx.body = {
            error: 'Already commented on the selected user',
        }
    }
    
    const currentYear = new Date().getFullYear();
    let isModeEligible = false;

    switch (mode) {
        case ModeDivision['standard']:
            isModeEligible = target.mca.some(e => e.standard && e.year == currentYear);
            break;

        case ModeDivision['mania']:
            isModeEligible = target.mca.some(e => e.mania && e.year == currentYear);
            break;
            
        case ModeDivision['taiko']:
            isModeEligible = target.mca.some(e => e.taiko && e.year == currentYear);
            break;
            
        case ModeDivision['fruits']:
            isModeEligible = target.mca.some(e => e.fruits && e.year == currentYear);
            break;

        case ModeDivision['storyboard']:
            isModeEligible = target.mca.some(e => e.storyboard && e.year == currentYear);
            break;
    }

    if (!isModeEligible) {
        return ctx.body = {
            error: `User wasn't active for the selected mode`,
        }
    }

    const comment = new UserComment();
    comment.mode = mode;
    comment.comment = newComment;
    comment.commenter = ctx.state.user;
    comment.target = target;
    comment.isValid = false;
    await comment.save();

    ctx.body = comment;
});

commentsRouter.post('/:id/update', isLoggedIn, isOwnerComment, async (ctx) => {
    const newComment: string = ctx.request.body.comment.trim();

    if (!newComment) {
        return ctx.body = {
            error: 'Add a comment',
        }
    }

    const comment: UserComment = ctx.state.comment;
    comment.comment = newComment;
    await comment.save();

    ctx.body = comment;
});

commentsRouter.post('/:id/remove', isLoggedIn, isOwnerComment, async (ctx) => {
    await ctx.state.comment.remove();

    ctx.body = {
        success: 'ok',
    };
});

export default commentsRouter;
