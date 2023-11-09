import { logError } from "../../utils/log.js";
import { getAllRepo } from "../../repositories/users/index.js";

export const getAll = async (req,res) => {
  try {
    const result = await getAllRepo();

    res.status(200).json(result);
  } catch (error) {
    logError("get all users", "error when searching for users", error);
  }
} 