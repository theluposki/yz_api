import { randomUUID } from "node:crypto";
import { db } from "../../database/index.js";
import { isEmail, isValidPassword, validAge } from "../../utils/validation.js";
import { logError } from "../../utils/log.js";
import { hash } from "../../utils/hashPassword.js"

export const addRepo = async (body) => {
  const id = randomUUID();

  const { nome, imagem, email, senha, data_nascimento, autorizacao } = body;

  if (validAge(data_nascimento)) return { error: validAge(data_nascimento) };
  if (isEmail(body.email)) return { error: isEmail(email) };
  if (isValidPassword(body.senha)) return { error: isValidPassword(senha) };

  const birthDate = new Date(data_nascimento).getTime();
  const hashPassword = hash(senha);

  try {
    const userAlreadyExists = await db
      .prepare("SELECT email FROM users WHERE email = ?")
      .get(email);

    if (userAlreadyExists) {
      return { error: "User already exists." };
    }

    const query = db.prepare(`
    INSERT INTO users (id, nome, imagem, email, senha, data_nascimento, autorizacao)
    VALUES (?, ?, ?, ?, ?, ?, ?);
    `);

    const row = query.run(
      id,
      nome,
      imagem,
      email,
      hashPassword,
      birthDate,
      JSON.stringify(autorizacao)
    );

    if (row.changes === 1) {
      return { message: "Registrado com sucesso!" };
    }
  } catch (error) {
    logError("add repo user", "Unable to register user.", error);
    return { error: "Unable to register user." };
  }
};
