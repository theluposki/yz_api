import { logger, validation } from "../../utils/index.js";
import { updateRepo } from "../../repositories/users/index.js";

export const update = async (req,res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    
    if (validation.isRequired({ id, ...body }, ["id","nome", "imagem", "email"]))
    return res.status(400).json({ error: validation.isRequired({ id, ...body }, ["id","nome", "imagem", "email"]) });
  
    const result = await updateRepo(id, body);

    if(result.error) {
      res.status(400).json({ error: result.error})
      return
    }

    res.status(201).json(result);
  } catch (error) {
    logger.err("update users", "error when updating user", error);
  }
} 