import { db } from "../../database/index.js";
import { logError } from "../../utils/log.js";

export const deleteRepo = async (id) => {
  try {
    const userExists = await db
      .prepare("SELECT id FROM users WHERE id = ?")
      .get(id);

    if (!userExists) return { error: "User not found." };

    const query = db.prepare("DELETE FROM users WHERE id = ?");

    const row = query.run(id);

    if (row.changes === 1) {
      return { message: "Deletado com sucesso!" };
    }
  } catch (error) {
    logError("delete repo user", "Unable to delete user.", error);
    return { error: "Unable to delete user." };
  }
}