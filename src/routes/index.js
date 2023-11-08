import base from "./base.js";
import users from "./users.js";

const version = "/api/v1" 

export const routes = (app) => {
  app.use('/', base);
  app.use(version+'/users', users);
}