import { logger, validation } from "../utils/index.js";
import { authRepo } from "../repositories/auth.js";

export const auth = async (req, res) => {
  const body = req.body;

  if (validation.isRequired(body, ["email", "senha"]))
    return res.status(400).json({ error: validation.isRequired(body, ["email", "senha"]) });

  try {
    const result = await authRepo(body);

    if(result.error) {
      res.status(400).json({ error: result.error})
      return
    }

    res.cookie("token", result.token, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
    });

    res.status(200).json({ message: result.message });
  } catch (error) {
    logger.err("auth", "error during authentication", error);
  }
};
