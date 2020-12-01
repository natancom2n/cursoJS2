

function criaPessoa(nome, sobrenome, idade){
    return{nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Natan','Alves', 25);
console.log(pessoa1.nome);

const pessoa = {
    nome: 'Natan',
    sobrenome: 'Alves',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi!`);
    }
}

pessoa.fala();
