

function saudacao(nome){
   // console.log(`Bom dia ${nome}!`);
    
    //return 123456;
    return `Bom dia ${nome}!`;
}

//enviar um dado por função
//saudacao('Natan');

//retornar algum dado da função:

const variavel = saudacao("Natan");
console.log(variavel);

//funcao para receber 2 valores e calcular entre eles
function calc (x,y){
    
    return x + y;
}

let result = calc(5,10);
console.log(result);


//colocando uma função dentro de uma variavel 
//const raiz = function(n){

//utilizando arrow function
const raiz = (n)=>{
    return n ** 0.5;
};

//Arrow function minor
const raiz2 = n => n ** 0.5;

console.log(raiz(64));
console.log(raiz(128));
console.log (raiz(24525));
console.log(raiz2(64));
console.log(raiz2(128));
console.log (raiz2(24525));