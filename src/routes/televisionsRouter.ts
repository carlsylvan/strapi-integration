import express from "express";
import { CmsClient } from "../clients/cmsClient";
import { TelevisionsController } from "../controllers/televisionsController";

const client = new CmsClient();
const controller = new TelevisionsController(client);

export const televisionsRouter = express.Router();

televisionsRouter.get('/', controller.getTelevisions.bind(controller))
                 .get('/:id', controller.getTelevision.bind(controller))
                 .delete('/:id', controller.deleteTelevision.bind(controller))
                 .post('/', controller.postTelevision.bind(controller))
                 .put('/:id', controller.updateTelevision.bind(controller));