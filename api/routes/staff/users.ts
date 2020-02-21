import Router from 'koa-router';
import { isLoggedIn, hasRole } from '../../../../CorsaceServer/middleware';
import { User } from '../../../../CorsaceModels/user';
import { UserComment } from '../../../../CorsaceModels/MCA_AYIM/userComments';

const usersRouter = new Router();

usersRouter.post('/:id/ban', isLoggedIn, hasRole('corsace', 'headStaff'), async (ctx) => {
    const user = await User.findOneOrFail(ctx.params.id, {
        relations: ['commentsMade'],
    });
    await UserComment.remove(user.commentsMade);
    user.canComment = false;
    await user.save();

    ctx.body = {
        success: 'ok',
    };
});

export default usersRouter;
