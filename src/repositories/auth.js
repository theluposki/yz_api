import { db } from "../database/index.js";
import { logger, hashPassword, jwt } from "../utils/index.js";

export const authRepo = async (body) => {
  const { email, senha } = body;

  try {
    const userExists = await db
      .prepare("SELECT id, email, senha FROM users WHERE email = ?")
      .get(email);

    if (!userExists) {
      return { error: "Usuário ou Senha invalidos." };
    }

    if(!hashPassword.compare(senha, userExists.senha)) {
      return { error: "Usuário ou Senha invalidos. senha" };
    }

    const token = jwt.sign(userExists.id);

    return { message: "Autenticado com sucesso!", token}
  } catch (error) {
    logger.err("auth repo", "error when authenticating.", error);
    return { error: "error when authenticating." };
  }
}