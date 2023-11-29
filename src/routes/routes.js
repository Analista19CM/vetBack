import { Router } from "express";
import {
  createCostumer,
  getCostumers,
  getCostumersById,
} from "../controllers/costumers.controller.js";
import { login, autorizathion } from "../controllers/login.controller.js";

const routes = Router();

routes.post("/login", autorizathion, login);

routes.get("/costumers",  getCostumers);
// routes.get('/costumers',createCostumer)
// routes.post("/costumers", getCostumersById);
// routes.put('/costumers',getCostumers)

export default routes;
