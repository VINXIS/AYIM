import "reflect-metadata";
import { App } from "../../CorsaceServer"
import mount from "koa-mount";
import commentsRouter from "./routes/comments";

const app = new App("ayim")

app.koa.use(mount("/comments", commentsRouter.routes()));

export default {
    path: "/api",
    handler: app.koa.callback(),
}
