

function funcao(){//mesmo não tendo o parametro pode ser utilizado
    console.log(arguments);
}
funcao('Valor', 1, 2, 3, 4, 5);

function funcaoArg(){
    let total = 0;

    for (let i of arguments){
        total += i;
    }
    console.log(total);
}
funcaoArg(1,2,3,4,5);

console.log('########################');

function funcaoOu(a, b=2, c=10){
    //b = b || 0; //se o b não for prenchido será zero, forma antiga
    console.log(a + c , a + b);
    
}
funcaoOu(8);
funcaoOu(8,8);
funcaoOu(8,8,8);
funcaoOu(8,undefined,8); //se enviar undefined ele mantem o que foi add no parametro
funcaoOu(8,null,8);//null ele assume como zero


//atribuição via desestruturação
function funcaoAtribuicao ({nome, sobrenome, idade}){ //recebendo um objeto ou Array
    console.log(nome, sobrenome, idade);
}
funcaoAtribuicao({nome: 'Natan', sobrenome: 'chupeta', idade: 37});
let objets = {nome: 'Natan', sobrenome: 'chupeta', idade: 37};
funcaoAtribuicao(objets);
