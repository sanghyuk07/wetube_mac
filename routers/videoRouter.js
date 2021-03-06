import express from "express";
import { deleteVideo, upload, videoDetail, videos } from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();
videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;