import express from "express";
import {watch, getEdit, getUpload, deleteVideo, postEdit, postUpload} from "../controllers/videoController";

const videoRouter = express.Router();


videoRouter.get("/:id(\\d+)", watch); //regular expression: only numbers
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);



export default videoRouter;