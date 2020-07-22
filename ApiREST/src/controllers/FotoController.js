class FotoController {
  async store(req, res) {
    res.status(200).json('Foto');
  }
}

export default new FotoController();
