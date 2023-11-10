import { logError } from "../utils/log.js";
import { authRepo } from "../repositories/auth.js";
import { isRequired } from "../utils/validation.js";

export const auth = async (req, res) => {
  const body = req.body;

  if (isRequired(body, ["email", "senha"]))
    return res.status(400).json({ error: isRequired(body, ["email", "senha"]) });

  try {
    const result = await authRepo(body);

    if(result.error) {
      res.status(400).json({ error: result.error})
      return
    }

    res.status(200).json(result);
  } catch (error) {
    logError("auth", "error during authentication", error);
  }
};
