import { db } from "../../database/index.js";
import { logError } from "../../utils/log.js";

export const getAllRepo = async () => {
  try {
    const users = await db
    .prepare("SELECT nome, email, senha, data_nascimento, autorizacao FROM users")
    .all();

    return users
  } catch (error) {
    logError("getAll repo user", "Unable to search for users.", error);
    return { error: "Unable to search for users." };
  }
}