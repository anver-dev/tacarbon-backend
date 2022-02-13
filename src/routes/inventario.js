import { Router } from "express";
import { createInsumo } from '../controllers/inventario'

const router = Router();

router.post('/insumos', createInsumo)


export default router;
