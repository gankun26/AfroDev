const express = require('express');
const consign = require('consign');

module.exports = () => {
    //criando nossa aplicação
    const app = express()

    app.use(express.json());

    //incluir tudo o que está na pasta controllers dentro do app
    consign()
       .include('controllers')
       .into(app)

    return app;   
}