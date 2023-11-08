import { logError } from "../../utils/log.js";

export const add = (req,res) => {
  try {
    res.status(201).json({ message: "success!"});
  } catch (error) {
    logError("add users", "error when inserting a new user", error);
  }
} 