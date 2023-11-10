import base from "./base.js";
import users from "./users.js";
import auth from "./auth.js";
import { validateToken } from "../middlewares/validToken.js";
const version = "/api/v1" 

export const routes = (app) => {
  app.use('/', base);
  app.use(version+'/users', validateToken, users);
  app.use(version+'/auth', auth);
}