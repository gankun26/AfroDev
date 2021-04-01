const configExpress = require('./config/configExpress');
const conexao = require('./infra/conexao');
const Tabelas = require('./infra/Tabelas');



//O connect é resposavel por conectar no servidor, mas precisamos testar
conexao.connect(error => {
    if(error) {
        throw error;
    }

    //Criando as tabelas ao iniciar o app
    Tabelas.init(conexao)

    //O configExpress é uma função que retorna nosso app configurado.
    //Chamando a função para obter o app configurado
    app = configExpress()

    //Subindo o servidor na porta 3000 e assim que subir executar uma função
    app.listen(3000, ()=> {
        console.log('servidor rodando na porta 3000')
    });
});





//npx nodemon é o comando que roda o sevidor nodejs