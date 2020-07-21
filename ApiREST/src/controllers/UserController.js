import User from '../model/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      const { id, nome, email } = novoUser;
      return res.status(200).json(
        { id, nome, email },
      );
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      console.log('\n\n\n\n\n');
      console.log(req.userId, req.userEmail);
      console.log('\n\n\n\n\n');
      const user = await User.findByPk(req.userId);

      if (!user) { // checa se o usuario existe
        return res.status(400).json({ errors: ['Usuario não existe.'] });
      }

      const novosDados = await user.update(req.body);

      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) { // checa se o usuario existe
        return res.status(400).json({ errors: ['Usuario não encontrado.'] });
      }

      await user.destroy();

      const { id, nome, email } = user;

      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
