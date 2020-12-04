

const pessoa = {
    nome: 'Natan',
    sobrenome: 'Alves',
    idade: 30,
    animal: 'cachorro',
    //carro: 'Scenic'
    endereco: {
        rua:'Amalia Tulio Costa',
        numero: 282,
        complemento: 'casa 2'
    }
};

const nome2 = pessoa.nome;
console.log(nome2);

//utilizando atribuição por desestruturação
const { nome } = pessoa;
console.log(nome);

const { sobrenome, idade , carro = '' } = pessoa;
console.log(sobrenome, idade , carro);

//mudando o nome da variavel 
const {animal: bichinho} = pessoa;
console.log(bichinho);

const { endereco} = pessoa;
console.log(endereco);

//pegando dados dentro do segundo objeto
const { endereco: {rua, numero, ...restoQSobrou}} = pessoa;
console.log(rua, numero);

//pegando o resto que sobrou
console.log(restoQSobrou);
