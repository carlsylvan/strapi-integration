import express from "express";
import { CmsClient } from "../clients/cmsClient";
import { ComputersController } from "../controllers/computersController";

const client = new CmsClient();
const controller = new ComputersController(client);

export const computersRouter = express.Router();

computersRouter.get('/', controller.getComputers.bind(controller))
                 .get('/:id', controller.getComputer.bind(controller))
                 .delete('/:id', controller.deleteComputer.bind(controller))
                 .post('/', controller.postComputer.bind(controller))
                 .put('/:id', controller.updateComputer.bind(controller));