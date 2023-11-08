import { Router } from "express";
import { getAll, add } from "../controllers/users/index.js";

const router = Router();

router.get('/', getAll);
router.post('/', add);

export default router;