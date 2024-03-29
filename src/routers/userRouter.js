import express from "express";
import {getEdit, postEdit, logout, see, seeuser, startGithubLogin, finishGithubLogin} from "../controllers/userController";
import { publicOnlyMiddleware,  protectorMiddleware } from '../middlewares';

const userRouter = express.Router();

//userRouter.get("/", seeuser);
userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get(":id", see);


export default userRouter;