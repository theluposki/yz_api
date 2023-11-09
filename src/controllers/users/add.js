import { logError } from "../../utils/log.js";
import { addRepo } from "../../repositories/users/index.js";
import { isRequired } from "../../utils/validation.js";

export const add = async (req, res) => {
  const body = req.body;

  if (isRequired(body, ["nome", "imagem", "email", "senha", "data_nascimento", "autorizacao"]))
    return res.status(400).json({ error: isRequired(body, ["nome", "imagem", "email", "senha", "data_nascimento", "autorizacao"]) });

  try {
    const result = await addRepo(body);

    if(result.error) {
      res.status(400).json({ error: result.error})
      return
    }

    res.status(201).json(result);
  } catch (error) {
    logError("add users", "error when inserting a new user", error);
  }
};
