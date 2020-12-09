//declaracão de função ( function hoisting)

falaOi();///mesmo chamando antes dela existir ira funcionar

function falaOi(){
    console.log('Oi');
}

//as fucnções são FIRST-CLASS OBJECTS ( pode ser tratato como um dado)
//function expression

const souUmDado = function(){

    console.log('Estou dentro de uma variavel');
};
souUmDado(); ///embora sido criada como variável pode ser executada como um dado

function executaUmaFuncao(funcao){
    funcao();
}

executaUmaFuncao(souUmDado);
//Arrow function
const funcaoArrow = () => {console.log("Sou uma Arrow Functino")};
funcaoArrow();

//dentro de um objeto
const pessoa = {
    nome: 'Natan',
    idade: 37,
    faleAlgo(){
        console.log('Ola meu nome é Natan');
    }
};
pessoa.faleAlgo();