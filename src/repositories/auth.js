import { db } from "../database/index.js";
import { logError } from "../utils/log.js";
import { compare } from "../utils/hashPassword.js";
import { sign } from "../utils/jwt.js";

export const authRepo = async (body) => {
  const { email, senha } = body;

  try {
    const userExists = await db
      .prepare("SELECT id, email, senha FROM users WHERE email = ?")
      .get(email);

    if (!userExists) {
      return { error: "Usuário ou Senha invalidos." };
    }

    if(!compare(senha, userExists.senha)) {
      return { error: "Usuário ou Senha invalidos. senha" };
    }

    const token = sign(userExists.id);

    return { message: "Autenticado com sucesso!!", token}
  } catch (error) {
    logError("auth repo", "error when authenticating.", error);
    return { error: "error when authenticating." };
  }
}