import Database from "better-sqlite3";
import { logger } from "../utils/index.js";
import { readFileSync } from "node:fs";

const options = { promise: 'async'/*verbose: console.log*/ };

export const db = new Database("yz.db", options);

db.pragma("foreign_keys = ON");
db.pragma('encoding = "UTF-8"');

export function setupDatabase() {
  try {
    const sqlSchema = readFileSync("tables.sql", "utf-8");
    db.exec(sqlSchema);
    logger.log("DATABASE 🗃️ ", "Table definitions performed successfully.");
  } catch (error) {
    logger.err("DATABASE 🗃️ ", "Error executing table definitions", error);
  }
}

process.on("SIGINT", () => {
  db.close();
  process.exit();
});
