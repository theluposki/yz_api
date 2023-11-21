import { logger, validation } from "../../utils/index.js";
import { addRepo } from "../../repositories/users/index.js";

export const add = async (req, res) => {
  const body = req.body;

  if (validation.isRequired(body, ["nome", "imagem", "email", "senha", "data_nascimento", "autorizacao"]))
    return res.status(400).json({ error: validation.isRequired(body, ["nome", "imagem", "email", "senha", "data_nascimento", "autorizacao"]) });

  try {
    const result = await addRepo(body);

    if(result.error) {
      res.status(400).json({ error: result.error})
      return
    }

    res.status(201).json(result);
  } catch (error) {
    logger.err("add users", "error when inserting a new user", error);
  }
};
