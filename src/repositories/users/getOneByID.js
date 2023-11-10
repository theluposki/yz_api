import { db } from "../../database/index.js";
import { logError } from "../../utils/log.js";

export const getOneByIDRepo = async (id) => {
  try {
    const userExists = await db.prepare("SELECT nome, imagem, email, data_nascimento, autorizacao FROM users WHERE id = ?").get(id);

    if (!userExists) return { error: "User not found." };

    return userExists
  } catch (error) {
    logError("getOneByID repo user", "Unable to search for this user.", error);
    return { error: "Unable to search for this user." };
  }
}