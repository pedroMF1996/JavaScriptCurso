import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../model/Foto';

const upload = multer(multerConfig).single('Foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(401).json({ errors: [err.code] });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;

      console.log({ originalname, filename, aluno_id });
      const foto = await Foto.create({ originalname, filename, aluno_id });
      console.log(foto);
      return res.json(foto);
    });
  }
}

export default new FotoController();
