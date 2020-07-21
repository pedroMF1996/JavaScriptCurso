import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/:id', loginRequired, userController.show);
router.post('/', userController.store);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;

/**
 * Pode ter em ada controller até 5 métodos
 * listar os usuários   - index       - GET
 * Cria os usuários     - store/create- POST
 * Apada um usuario     - delete      - DELETE
 * Mostra um usuário    - show        - GET
 * Atualiza um usuario  - update      - PATCH/PUT
 */
