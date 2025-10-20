import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id:1,
        titulo: "O senhor dos Aneis"
    },
    {
        id:2,
        titulo: "Harry Potter"
    },
];

function buscarLivrosId(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
};

app.get("/", (req, res) => {
    res.status(200).send('Curso de Node.JS');
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
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