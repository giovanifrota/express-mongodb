import express from "express";
import conectaNaDataBase from "./Config/db-connect.js";
import routes from "./Routes/index.js";


const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso!");
});

const app = express();
routes(app);


app.delete("/livros/:id", (req, res) => {
    const index = buscarLivrosId(req.params.id);
    livros.splice(index, 1);

    res.status(200).send('Livro Deletado!');
});

export default app;
