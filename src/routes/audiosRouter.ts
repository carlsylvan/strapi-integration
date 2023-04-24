import express from "express";
import { CmsClient } from "../clients/cmsClient";
import { AudiosController } from "../controllers/audioController";

const client = new CmsClient();
const controller = new AudiosController(client);

export const audiosRouter = express.Router();

audiosRouter.get('/', controller.getAudios.bind(controller))
                 .get('/:id', controller.getAudio.bind(controller))
                 .delete('/:id', controller.deleteAudio.bind(controller))
                 .post('/', controller.postAudio.bind(controller))
                 .put('/:id', controller.updateAudio.bind(controller));