import { databasePromise } from "../../database/index.js";
import { logger } from "../../utils/index.js";

export const updateAuthorization = async (id, body) => {
  const { autorizacao } = body;

  const db = await databasePromise;

  try {
    const userExists = await db.get("SELECT id FROM users WHERE id = ?", [id]);

    if (!userExists) return { error: "User not found." };

    const query = `UPDATE users
    SET autorizacao = ?
    WHERE id = ?
    `;

    const row = await db.run(query, [autorizacao, id]);

    if (row.changes === 1) {
      return { message: "Autorização atualizada com sucesso!" };
    }
  } catch (error) {
    logger.err(
      "updateAuthorization repo user",
      "Unable to updateAuthorization user.",
      error
    );
    return { error: "Unable to updateAuthorization user." };
  }
};
