
// let a= 'A';
// let b = 'B';
// let c = 'C';
// console.log(a,b,c);

// //atribuição via estruturação           //array
// [a , b, c]                      =       [1 ,2 , 3];
// console.log(a,b,c);

// const numeros = [2,3,4];
// //o array pode ser trocado por uma variavel array
// [a,b,c] = numeros;
// console.log(a,b,c);

// const letras = ['C','B','A'];
// [a,b,c] = letras;
// console.log(a,b,c);

const numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero,segundoNumero] = numeros; //adicionou o 1° e 2° numero do array nas 2 variaveis
console.log(primeiroNumero, segundoNumero);

//pegando o que sobrou e adicionando em uma variavel ( rest operator)
const [pegaPrimeiro, pegaSegundo, ...restoVariavel] = numeros;
console.log(restoVariavel);

//pegando os dados pulando indices
const [um, , três, , cinco] = numeros;
console.log(um, três, cinco);

//indices Matriz       0          1          2    
//indices dos arr   0  1  2    0  1  2    0  1  2  
const numMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numMatriz[1][2]); //pegando o indice 2 do array 1

//desestruturaçao em matriz
const [,[,,seis]] = numMatriz;
console.log(seis);

//forma mais simples
const [lista1, lista2, lista3] = numMatriz;
console.log(lista3);
console.log(lista3[2]);//pegando o indice de dentro da lista 3