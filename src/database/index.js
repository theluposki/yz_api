import Database from "better-sqlite3";
import { log, logError } from "../utils/log.js";
import { readFileSync } from "node:fs";

const options = { promise: 'async'/*verbose: console.log*/ };

export const db = new Database("yz.db", options);

db.pragma("foreign_keys = ON");
db.pragma('encoding = "UTF-8"');

export function setupDatabase() {
  try {
    const sqlSchema = readFileSync("tables.sql", "utf-8");
    db.exec(sqlSchema);
    log("DATABASE 🗃️ ", "Table definitions performed successfully.");
  } catch (error) {
    console.log(error);
    logError("DATABASE 🗃️ ", "Error executing table definitions", error);
  }
}

process.on("SIGINT", () => {
  db.close();
  process.exit();
});
