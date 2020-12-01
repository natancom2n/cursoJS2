
const alunos = ['Luiz' , 'Marcia', 'João'];

// console.log(alunos);
// //para exibir somente um indice
// console.log(alunos[0]);

//editar array
// alunos [0] = 'Natan';

//saber o tamanho do array:
//console.log (alunos.length);

//aumentar o array sem precisar saber o tamanho total do array:
//sempre adiciona no fim do array
//alunos[alunos.length] = 'Luiza';
//alunos[alunos.length] = 'Maria';
//alunos[alunos.length] = 'Mario';

//o mesmo do de cima porém mais simples:
alunos.push('Joao Henrique');
alunos.push ('Alberto');

//função para adicionar ao inicio:
alunos.unshift('Natan');

//remove o ultimo do array
alunos.pop();

//o removido pode ser adicionado a uma variável:
const removido = alunos.pop();

//remove do começo:
alunos.shift();

console.log(alunos , alunos.length , removido);

//fatiar o array:
//abaixo quero que seja mostrado somente o indice 0 até o 2
console.log(alunos.slice(0,3));

//slice só que fo final para o começo
console.log(alunos.slice(0, -1));

//verificar se alunos é array
console.log(alunos instanceof Array);