import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return callback(new multer.MulterError('Arquivo precisa ser png ou jpg.'));
    }
    return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads', 'images'),
    filename: (req, file, callback) => {
      console.log(extname(file.originalname));
      return callback(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
