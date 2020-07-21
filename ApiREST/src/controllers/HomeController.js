import Aluno from '../model/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'mariam@hotmail.com',
      idade: 21,
      peso: 57.00,
      altura: 1.60,
    });
    res.status(200).json(
      novoAluno,
    );
  }
}

export default new HomeController();
