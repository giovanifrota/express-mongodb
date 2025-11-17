import { autor } from "../Models/Autor.js";


class autoresController {
  static async listarAutores(req, res) {
    
    try{
      const listaAutores = await autor.find({});
  
      res.status(200).json(listaAutores);

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na requisição`});
    }
  };

    static async listarAutoresPorId(req, res) {
    const id = req.params.id;
    try{
      const autoresEncontrado = await autor.findById(id);
  
      res.status(200).json(autoresEncontrado);

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na requisição do autor`});
    }
  };

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({message: "criado com sucesso!", autor: novoAutor});
    } catch (erro) {
        res.status(500).json({message: `${erro.message} - Falha ao cadastrar autor!`});
    }
  }

    static async atualizarAutor (req, res) {
    const id = req.params.id;
    try{
     await autor.findByIdAndUpdate(id, req.body);
  
      res.status(200).json({message: "autor atualizado!"});  

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha na atualização do autor`});
    }
  };

   static async excluirAutor (req, res) {
    const id = req.params.id;
    try{
     await autor.findByIdAndDelete(id);
  
      res.status(200).json({message: "autor deletado!"});  

    }catch(erro){
      res.status(500).json({message: `${erro.message} - falha ao deletar o autor`});
    }
  };
}

export default autoresController;
