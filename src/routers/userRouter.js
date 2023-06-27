import express from "express";
import {edit, logout, see, seeuser, startGithubLogin, finishGithubLogin} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", seeuser);
userRouter.get("/users/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/:id", see);


export default userRouter;