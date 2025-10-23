import livro from "../Models/Livro.js";

class livroController {
  static async listarLivros(req, res) {
    const listaLivros = await livro.find({});

    res.status(200).json(listaLivros);
  }
  
};

export default livroController;
