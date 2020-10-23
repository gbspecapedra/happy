import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";
import SessionsController from "./controllers/SessionsController";
import UsersController from "./controllers/UsersController";
import { Authentication } from "./middlewares/Authentication";

const routes = Router();
const upload = multer(uploadConfig);

/**
 * Public routes
 */
routes.post("/users", UsersController.create);
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);

/**
 * Private routes
 */
routes.post("/sessions", SessionsController.index);
routes.use(Authentication);

routes.get("/users/:id", UsersController.show);
routes.put("/users/:email", UsersController.update);

routes.post("/orphanages", upload.array("images"), OrphanagesController.create);

export default routes;
