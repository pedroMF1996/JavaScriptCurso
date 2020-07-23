import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', loginRequired, userController.index);
// router.get('/:id', loginRequired, userController.show);

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * Pode ter em ada controller até 5 métodos
 * listar os usuários   - index       - GET
 * Cria os usuários     - store/create- POST
 * Apada um usuario     - delete      - DELETE
 * Mostra um usuário    - show        - GET
 * Atualiza um usuario  - update      - PATCH/PUT
 */
