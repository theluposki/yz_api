import { logError } from "../../utils/log.js";
import { deleteRepo } from "../../repositories/users/index.js";
import { isRequired } from "../../utils/validation.js";

export const deleteC = async (req,res) => {
  const id = req.params.id;

  try {
    if (isRequired({ id }, ["id"]))
    return res.status(400).json({ error: isRequired({ id }, ["id"]) });

    const result = await deleteRepo(id);

    if(result.error) {
      res.status(400).json({ error: result.error})
      return
    }

    res.status(200).json(result);
  } catch (error) {
    logError("delete users", "error when deleting user", error);
  }
} 