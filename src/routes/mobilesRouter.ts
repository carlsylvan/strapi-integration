import express from "express";
import { CmsClient } from "../clients/cmsClient";
import { MobilesController } from "../controllers/mobilesController";
import { forceAuthorize } from "../middleware/forceAuth";

const client = new CmsClient();
const controller = new MobilesController(client);

export const mobilesRouter = express.Router();

mobilesRouter.get('/', controller.getMobiles.bind(controller))
                 .get('/:id', controller.getMobile.bind(controller))
                 .delete('/:id', forceAuthorize, controller.deleteMobile.bind(controller))
                 .post('/', forceAuthorize, controller.postMobile.bind(controller))
                 .put('/:id', forceAuthorize, controller.updateMobile.bind(controller));