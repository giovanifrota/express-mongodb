import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import livro from './Models/livros.js';


const conexao = await conectaNaDatabase();

conexao.on("Error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("conexao feita com o banco com sucesso!");
});

const app = express();
app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.JS");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});//É um metodo do mongoose que vai se conectar com banco atlas vai encontra(find) tudo na coleção livros
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = busca_verifica_livro(req.params.id);

    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
   
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscarLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
   
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscarLivros(req.params.id);
    livros.splice(index, 1);
   
    res.status(200).send('Livro Removido com Sucesso!');
});


export default app;