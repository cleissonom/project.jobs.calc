const express = require("express");
const server = express();
const routes = require("./routes");
const path = require('path')

//usando template engine
server.set('view engine', 'ejs')

//mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//habilitar arquivos estáticos(arquivos imutáveis(imagens,videos, css, js))
server.use(express.static("public"));

//usar o request.body
server.use(express.urlencoded({ extended: true }))

//routes | está usando as rotas, que foi requerido de outro arquivo para melhorar organização
server.use(routes)

server.listen(3000, () => console.log("rodando"));