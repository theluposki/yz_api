import { logger, validation } from "../../utils/index.js";
import { myRepo } from "../../repositories/users/index.js";


export const my = async (req, res) => {
  const id = req.user.id;
  try {
    if (validation.isRequired({ id }, ["id"]))
    return res.status(400).json({ error: validation.isRequired({ id }, ["id"]) });
  
    const result = await myRepo(id);

    if(result.error) {
      res.status(400).json({ error: result.error})
      return
    }

    res.status(200).json(result);
  } catch (error) {
    logger.err("my users", "error when searching for user", error);
  }
} 