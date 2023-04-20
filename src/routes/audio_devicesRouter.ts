import express from "express";
import { CmsClient } from "../clients/cmsClient";
import { Audio_devicesController } from "../controllers/audio_devicesController";

const client = new CmsClient();
const controller = new Audio_devicesController(client);

export const audio_devicesRouter = express.Router();

audio_devicesRouter.get('/', controller.getAudio_devices.bind(controller))
                 .get('/:id', controller.getAudio_device.bind(controller))
                 .delete('/:id', controller.deleteAudio_device.bind(controller))
                 .post('/', controller.postAudio_device.bind(controller))
                 .put('/:id', controller.updateAudio_device.bind(controller));