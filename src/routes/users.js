import { Router } from "express";
import { getAll, add, getOneByID, update, deleteC, updateAuthorizationC, my } from "../controllers/users/index.js";

const router = Router();

router.get('/', getAll);
router.get('/my', my);
router.get('/:id', getOneByID);
router.post('/', add);
router.put('/:id', update);
router.put('/authorization/:id', updateAuthorizationC);
router.delete('/:id', deleteC);

export default router;