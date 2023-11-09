import { logError } from "../../utils/log.js";
import { updateRepo } from "../../repositories/users/index.js";
import { isRequired } from "../../utils/validation.js";

export const update = async (req,res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    
    if (isRequired({ id, ...body }, ["id","nome", "imagem", "email"]))
    return res.status(400).json({ error: isRequired({ id, ...body }, ["id","nome", "imagem", "email"]) });
  
    const result = await updateRepo(id, body);

    if(result.error) {
      res.status(400).json({ error: result.error})
      return
    }

    res.status(201).json(result);
  } catch (error) {
    logError("update users", "error when updating user", error);
  }
} 