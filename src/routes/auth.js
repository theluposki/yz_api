import { Router } from "express";
import { auth } from "../controllers/auth.js";

const router = Router();

router.post('/', auth);

export default router;