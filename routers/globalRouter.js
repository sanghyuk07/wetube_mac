import express from "express";
import { join, login, logout } from "../controllers/userController";
import { home, serach } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();
globalRouter.get(routes.home,home);
globalRouter.get(routes.search, serach);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);


export default globalRouter;

