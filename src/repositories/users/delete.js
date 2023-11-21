import { databasePromise } from "../../database/index.js";
import { logger } from "../../utils/index.js";

export const deleteRepo = async (id) => {
  const db = await databasePromise;

  try {
    const userExists = await db.get("SELECT id FROM users WHERE id = ?", [id]);

    if (!userExists) return { error: "User not found." };

    const query = "DELETE FROM users WHERE id = ?";

    const row = await db.run(query, [id]);

    if (row.changes === 1) {
      return { message: "Deletado com sucesso!" };
    }
  } catch (error) {
    logger.err("delete repo user", "Unable to delete user.", error);
    return { error: "Unable to delete user." };
  }
};
