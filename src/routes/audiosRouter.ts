import express from "express";
import { CmsClient } from "../clients/cmsClient";
import { AudiosController } from "../controllers/audioController";
import { forceAuthorize } from "../middleware/forceAuth";

const client = new CmsClient();
const controller = new AudiosController(client);

export const audiosRouter = express.Router();

audiosRouter.get('/', controller.getAudios.bind(controller))
                 .get('/:id', controller.getAudio.bind(controller))
                 .delete('/:id', forceAuthorize, controller.deleteAudio.bind(controller))
                 .post('/', forceAuthorize, controller.postAudio.bind(controller))
                 .put('/:id', forceAuthorize, controller.updateAudio.bind(controller));