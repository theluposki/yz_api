import { logError } from "../../utils/log.js";
import { updateAuthorization } from "../../repositories/users/index.js";
import { isRequired } from "../../utils/validation.js";

export const updateAuthorizationC = async (req,res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    
    if (isRequired({ id, ...body }, ["id","autorizacao"]))
    return res.status(400).json({ error: isRequired({ id, ...body }, ["id","autorizacao"]) });
  
    const result = await updateAuthorization(id, body);

    if(result.error) {
      res.status(400).json({ error: result.error})
      return
    }

    res.status(201).json(result);
  } catch (error) {
    logError("updateAuthorization users", "error when update authorization user", error);
  }
} 