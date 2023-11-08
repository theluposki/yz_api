import { logError } from "../../utils/log.js";

export const getAll = (req,res) => {
  try {
    res.status(200).json([]);
  } catch (error) {
    logError("get all users", "error when searching for users", error);
  }
} 