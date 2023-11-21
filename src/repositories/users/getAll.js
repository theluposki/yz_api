import { databasePromise } from "../../database/index.js";
import { logger } from "../../utils/index.js";

export const getAllRepo = async () => {
  const db = await databasePromise;

  try {
    const query =
      "SELECT id, nome, email, data_nascimento, autorizacao FROM users";

    const users = await db.all(query);

    return users;
  } catch (error) {
    logger.err("getAll repo user", "Unable to search for users.", error);
    return { error: "Unable to search for users." };
  }
};
