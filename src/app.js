import express from "express";
import conectaNaDataBase from "./Config/db-connect.js";
import livro from "./Models/Livro.js";


const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso!");
});

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send('Curso de Node.JS');
});

app.get("/livros/:id", (req, res) => {
    const index = buscarLivrosId(req.params.id);

    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);

    res.status(201).send('Livro Criado!');
});

app.put("/livros/:id", (req, res) => {
    const index = buscarLivrosId(req.params.id);
    livros[index].titulo = req.body.titulo;

    res.status(200).send('Livro Atualizado!');
});

app.delete("/livros/:id", (req, res) => {
    const index = buscarLivrosId(req.params.id);
    livros.splice(index, 1);

    res.status(200).send('Livro Deletado!');
});

export default app;
