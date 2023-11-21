import { db } from "../../database/index.js";
import { logger } from "../../utils/index.js";

export const updateRepo = async (id, body) => {

  const { nome, imagem, email } = body;

  try {
    const userExists = await db.prepare("SELECT id FROM users WHERE id = ?").get(id);

    if (!userExists) return { error: "User not found." };

    const query = db.prepare(`UPDATE users
    SET nome = ?, imagem = ?, email = ?
    WHERE id = ?
    `);

    const row = query.run(nome, imagem, email, id);

    if (row.changes === 1) {
      return { message: "Atualizado com sucesso!" };
    }
  } catch (error) {
    logger.err("update repo user", "Unable to update user.", error);
    return { error: "Unable to update user." };
  }
}