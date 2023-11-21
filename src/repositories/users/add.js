import { randomUUID } from "node:crypto";
import { databasePromise } from "../../database/index.js";
import { logger, hashPassword, validation } from "../../utils/index.js";

export const addRepo = async (body) => {
  const id = randomUUID();

  const { nome, imagem, email, senha, data_nascimento, autorizacao } = body;

  if (validation.isValidAge(data_nascimento))
    return { error: validation.isValidAge(data_nascimento) };
  if (validation.isEmail(body.email))
    return { error: validation.isEmail(email) };
  if (validation.isValidPassword(body.senha))
    return { error: validation.isValidPassword(senha) };

  const birthDate = new Date(data_nascimento).getTime();
  const hashPasswordText = await hashPassword.hash(senha);

  const db = await databasePromise;

  try {
    const userAlreadyExists = await db.get(
      "SELECT email FROM users WHERE email = ?",
      [email]
    );

    if (userAlreadyExists) {
      return { error: "User already exists." };
    }

    const query = `
    INSERT INTO users (id, nome, imagem, email, senha, data_nascimento, autorizacao)
    VALUES (?, ?, ?, ?, ?, ?, ?);
    `;

    const row = await db.run(query, [
      id,
      nome,
      imagem,
      email,
      hashPasswordText,
      birthDate,
      JSON.stringify(autorizacao),
    ]);

    if (row.changes === 1) {
      return { message: "Registrado com sucesso!" };
    }
  } catch (error) {
    logger.err("add repo user", "Unable to register user.", error);
    return { error: "Unable to register user." };
  }
};
