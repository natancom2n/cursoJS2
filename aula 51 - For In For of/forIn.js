
const frutas = ['Uva', 'morango', 'maça' ];

// for (let = 0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }


//for in lê os indices de um vetor ou chaves de objeto
for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = { nome: 'natan', sobrenome: 'Alves', carro: 'Scenic' };

for (let chave in pessoa){
    console.log (chave ,pessoa[chave]);
}

//abaixo sobre for of:
console.log('###########FOR OF######'); //NÃO FUNCIONA PARA OBJETOS

const nome = 'Natan ALves';
//for classico
for (let i = 0; i< nome.length ; i++){
    console.log(nome[i]);
}

const nomE = ['Natan', 'Alves', 'Pinto'];

for (let valor of nomE){
    console.log(valor);
}

console.log('###########FOR EACH######');
    nomE.forEach(function(valor, indice, array){
        console.log(valor, indice, array);
    });

