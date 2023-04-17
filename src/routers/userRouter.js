import express from "express";
import {edit, remove, logout, see, seeuser} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", seeuser);
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);


export default userRouter;