import { logger, validation } from "../../utils/index.js";
import { updateAuthorization } from "../../repositories/users/index.js";

export const updateAuthorizationC = async (req,res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    
    if (validation.isRequired({ id, ...body }, ["id","autorizacao"]))
    return res.status(400).json({ error: validation.isRequired({ id, ...body }, ["id","autorizacao"]) });
  
    const result = await updateAuthorization(id, body);

    if(result.error) {
      res.status(400).json({ error: result.error})
      return
    }

    res.status(201).json(result);
  } catch (error) {
    logger.err("updateAuthorization users", "error when update authorization user", error);
  }
} 