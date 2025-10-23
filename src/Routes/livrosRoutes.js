import express from "express";
import livroController from "../Controllers/livroController";

const routes = express.Router();

routes.get("/livros", livroController.listarLivros);