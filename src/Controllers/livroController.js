import livro from "../Models/Livro.js";
import {autor} from "../Models/Autor.js";

class livroController {
  static async listarLivros(req, res) {
    
    try{
      const listaLivros = await livro.find({});
  
      res.status(200).json(listaLivros);

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na requisição`});
    }
  };

    static async listarLivroPorId(req, res) {
    const id = req.params.id;
    try{
      const livroEncontrado = await livro.findById(id);
  
      res.status(200).json(livroEncontrado);

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na requisição do livro`});
    }
  };

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({message: "criado com sucesso!", livro: novoLivro});
    } catch (erro) {
        res.status(500).json({message: `${erro.message} - Falha ao cadastrar livro!`});
    }
  }

    static async atualizarLivro (req, res) {
    const id = req.params.id;
    try{
     await livro.findByIdAndUpdate(id, req.body);
  
      res.status(200).json({message: "livro atualizado!"});  

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na atualização do livro`});
    }
  };

   static async excluirLivro (req, res) {
    const id = req.params.id;
    try{
     await livro.findByIdAndDelete(id);
  
      res.status(200).json({message: "livro deletado!"});  

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha ao deletar do livro`});
    }
  };

  static async listarLivrosPorEditor(req, res) {
    const editora = req.query.editora;
    try{
      const livroPorEditora = await livro.find({ editora: editora});
      res.status(200).json(livroPorEditora);
    }catch(erro){
      res.statuss(500).json({message: `${erro} - Falha na busca`})
    }
  }
}

export default livroController;
