import { createServer } from "node:http";
import { app } from "./app.js";
import config from "./config.js";
import colors from  "@colors/colors";
import { setupDatabase } from "./database/index.js";

setupDatabase();
const server = createServer(app);

server.listen(config.app.PORT, () => {
  console.log(`[${colors.green("APP")}] ${colors.magenta("🚀 running at")} ${colors.underline("http://localhost:"+config.app.PORT)} 🔗`)
})
