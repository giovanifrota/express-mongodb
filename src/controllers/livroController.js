import livro from "../Models/livros.js";

class LivroController {
    static async listarLivros(req, res){ //Static é uma palavra chave que usa quando queremos usar metodos de uma classe sem ter que instanciar essa classe
        const listaLivros = await livro.find({});//É um metodo do mongoose que vai se conectar com banco atlas vai encontra(find) tudo na coleção livros
        res.status(200).json(listaLivros);
    }
};

export default LivroController;
