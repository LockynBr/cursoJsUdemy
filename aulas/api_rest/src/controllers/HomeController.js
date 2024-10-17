import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Cristiano',
      sobrenome: 'Gomes do Santos',
      email: 'cristianocris12@gmail.com',
      idade: 20,
      peso: 80,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
