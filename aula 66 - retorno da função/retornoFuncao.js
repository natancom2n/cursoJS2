
//função que retorna outra funcao
function falaFrase(comeco){
    function falaResto(resto){
        return resto;
    }
    return falaResto; //retornando a funcao falaResto sem executala
}

function duplica(num){
    return num * 2;
}

function triplica(num){
    return num * 3;
}

function quadriplica(num){
    return num * 4;
}
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
console.log("#######################");

function criaMultiplicador(multiplicador){
    //multiplicador está aqui nesse escopo
    return function (num){
        return num * multiplicador;
    };
}

const duplica2 = criaMultiplicador(2);
const triplica3 = criaMultiplicador(3);
const quadriplica4 = criaMultiplicador(4);

console.log(duplica2(2));
console.log(triplica3(2));
console.log(quadriplica4(2));