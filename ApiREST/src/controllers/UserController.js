import User from '../model/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.status(200).json(
        novoUser,
      );
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) { // checa se foi mandado o id nos parametros da requisição
        return res.status(400).json({ errors: ['Id não enviado.'] });
      }

      const user = await User.findByPk(id);
      if (!user) { // checa se o usuario existe
        return res.status(400).json({ errors: ['Usuario não encontrado.'] });
      }

      const novosDados = await user.update(req.body);

      return res.json(novosDados);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) { // checa se foi mandado o id nos parametros da requisição
        return res.status(400).json({ errors: ['Id não enviado.'] });
      }

      const user = await User.findByPk(id);
      if (!user) { // checa se o usuario existe
        return res.status(400).json({ errors: ['Usuario não encontrado.'] });
      }

      await user.destroy();

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
