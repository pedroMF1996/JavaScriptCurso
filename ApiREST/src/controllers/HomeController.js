class HomeController {
  index(req, res) {
    res.status(200).json(
      { 'Deu tudo certo denovo': true },
    );
  }
}

export default new HomeController();
