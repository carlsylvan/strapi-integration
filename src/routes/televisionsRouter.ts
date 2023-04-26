import express from "express";
import { CmsClient } from "../clients/cmsClient";
import { TelevisionsController } from "../controllers/televisionsController";
import { forceAuthorize } from "../middleware/forceAuth";

const client = new CmsClient();
const controller = new TelevisionsController(client);

export const televisionsRouter = express.Router();

televisionsRouter.get('/', controller.getTelevisions.bind(controller))
                 .get('/:id', controller.getTelevision.bind(controller))
                 .delete('/:id', forceAuthorize, controller.deleteTelevision.bind(controller))
                 .post('/', forceAuthorize, controller.postTelevision.bind(controller))
                 .put('/:id', forceAuthorize, controller.updateTelevision.bind(controller));