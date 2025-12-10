# Node.js: Criando uma API REST com Express e MongoDB

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white)
![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)


_Este projeto é uma API REST desenvolvida com Node.js, Express e MongoDB, implementando operações CRUD completas, seguindo boas práticas de organização e modelagem de dados utilizando Mongoose._
# Tecnologias Utilizadas
* Node.js
* Express
* MongoDB
* Mongoose
* Nodemon

# Endpoints
* Criar um livro
```bash
POST /livros
```
* Listar todos os livros
```bash
GET /livros
```
* Listar um livro por ID
```bash
GET /livros/:id
```
*Atualizar um livro
```bash
PUT /livros/:id
```
* Excluir um livro
```bash
DELETE /livros/:id
```
# Como executar
* Clonar o repositório
```bash 
 git clone https://github.com/seu-usuario/seu-repositorio.git
```
# Instalar dependências
```bash 
 npm install
```
# Configurar o .env
```bash
 MONGODB_URI=sua_string
 PORT=3000
```
# Rodar o servidor
```bash
npm run dev
```
# Testes da API
_Recomendado utilizar:_
* Postman
* Insomnia
