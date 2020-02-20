import "reflect-metadata";
import { App } from "../../CorsaceServer"
import mount from "koa-mount";
import commentsRouter from "./routes/comments";
import commentsReviewRouter from "./routes/staff/comments";
import usersRouter from "./routes/staff/users";

const app = new App("ayim")

app.koa.use(mount("/comments", commentsRouter.routes()));
app.koa.use(mount("/staff/comments", commentsReviewRouter.routes()));
app.koa.use(mount("/staff/users", usersRouter.routes()));

export default {
    path: "/api",
    handler: app.koa.callback(),
}
