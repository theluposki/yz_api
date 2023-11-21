import { logger, validation } from "../../utils/index.js";
import { deleteRepo } from "../../repositories/users/index.js";

export const deleteC = async (req,res) => {
  const id = req.params.id;

  try {
    if (validation.isRequired({ id }, ["id"]))
    return res.status(400).json({ error: validation.isRequired({ id }, ["id"]) });

    const result = await deleteRepo(id);

    if(result.error) {
      res.status(400).json({ error: result.error})
      return
    }

    res.status(200).json(result);
  } catch (error) {
    logger.err("delete users", "error when deleting user", error);
  }
} 