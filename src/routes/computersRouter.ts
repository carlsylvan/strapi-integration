import express from "express";
import { CmsClient } from "../clients/cmsClient";
import { ComputersController } from "../controllers/computersController";
import { forceAuthorize } from "../middleware/forceAuth";

const client = new CmsClient();
const controller = new ComputersController(client);

export const computersRouter = express.Router();

computersRouter.get('/', controller.getComputers.bind(controller))
                 .get('/:id', controller.getComputer.bind(controller))
                 .delete('/:id', forceAuthorize, controller.deleteComputer.bind(controller))
                 .post('/', controller.postComputer.bind(controller))
                 .put('/:id', controller.updateComputer.bind(controller));