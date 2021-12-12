import express from "express";
import error from "../../middleware/error";
import routes from "./routes"
import loaders from "./loaders";
import "../database/database"

const server: express.Application = express();

loaders(server);
routes(server);

server.use(error);

export default server;