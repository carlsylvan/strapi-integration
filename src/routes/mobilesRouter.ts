import express from "express";
import { CmsClient } from "../clients/cmsClient";
import { MobilesController } from "../controllers/mobilesController";

const client = new CmsClient();
const controller = new MobilesController(client);

export const mobilesRouter = express.Router();

mobilesRouter.get('/', controller.getMobiles.bind(controller))
                 .get('/:id', controller.getMobile.bind(controller))
                 .delete('/:id', controller.deleteMobile.bind(controller))
                 .post('/', controller.postMobile.bind(controller))
                 .put('/:id', controller.updateMobile.bind(controller));