import { Router } from 'express';
import { obtenerMaterias, obtenerMateriaPorId } from '../controllers/materias.controller';

const router = Router();

router.get('/', obtenerMaterias);

router.get('/:id', obtenerMateriaPorId);

export default router;