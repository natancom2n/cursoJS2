function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao1 = retornaFuncao('Natan');
const funcao2 = retornaFuncao('Alve');
console.log(funcao1());
console.log(funcao2());