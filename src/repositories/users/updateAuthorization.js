import { db } from "../../database/index.js";
import { logger } from "../../utils/index.js";

export const updateAuthorization = async (id, body) => {

  const { autorizacao } = body;

  try {
    const userExists = await db.prepare("SELECT id FROM users WHERE id = ?").get(id);

    if (!userExists) return { error: "User not found." };

    const query = db.prepare(`UPDATE users
    SET autorizacao = ?
    WHERE id = ?
    `);

    const row = query.run(autorizacao, id);

    if (row.changes === 1) {
      return { message: "Autorização atualizada com sucesso!" };
    }
  } catch (error) {
    logger.err("updateAuthorization repo user", "Unable to updateAuthorization user.", error);
    return { error: "Unable to updateAuthorization user." };
  }
}