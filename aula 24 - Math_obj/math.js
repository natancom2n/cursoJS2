

let num1 = 9.44567989879890909987654
// arredondar para o baixo o número por isso (floor)
let numBaixo = Math.floor(num1);
//arredondar para cima :
let numALto = Math.ceil(num1);
//arredonda para o mais próximo passando de .50
let numProximo = Math.round(num1);
//console.log(numBaixo , numALto , numProximo);

//retiara raiz quadrada numero:
let raizQuad = num1 ** 0.5;

//bolean para verificar se é inteiro ou não
let ehInteiro = Number.isInteger(num1);

//mostra o mais número da sequencia:
//console.log(Math.max(1,5,4,3,17,28,60,45,2,13));

//mostra o menor número da sequancia
//console.log(Math.min (1,5,4,3,17,28,60,45,2,13));

//mostra o menor número da sequancia
console.log(Math.max (1,5,4,3,17,28,60,45,2,13));

//mostra número aleatório entre 0 e 1
//console.log(Math.random());

//numero aleatorio entre 5 e 10
let numAleatorio = Math.random() *(10 - 5) + 5;
//console.log(numAleatorio);

//utilizar round para ficar mais simples
//console.log(Math.round(Math.random() * (10 - 5) + 5));