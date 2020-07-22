import { Router } from 'express';
import multer from 'multer';
import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('Foto'), (req, res, next) => {
  console.log('passou por aqui');
  return next();
}, fotoController.store);

export default router;
