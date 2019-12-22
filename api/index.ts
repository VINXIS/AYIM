import "reflect-metadata";
import { Config } from "../../config"
import { App } from "../../commonRoutes"

const config = new Config()
const app = new App(config.ayim.publicURL, config.ayim.keys)

export default {
    path: "/api",
    handler: app.koa.callback(),
}
