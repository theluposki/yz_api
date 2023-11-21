import { db } from "../../database/index.js";
import { logger } from "../../utils/index.js";

export const getAllRepo = async () => {
  try {
    const query = db.prepare("SELECT id, nome, email, data_nascimento, autorizacao FROM users")

    const users = query.all();

    return users
  } catch (error) {
    logger.err("getAll repo user", "Unable to search for users.", error);
    return { error: "Unable to search for users." };
  }
}