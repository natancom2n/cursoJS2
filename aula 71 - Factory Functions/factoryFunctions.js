//funcoes que criam objetos
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor ){
            valor = valor.split(' '); //divide levando em consideração o atributo passado nos parenteses
              this.nome = valor.shift();

              this.sobrenome = valor.join(' ');

        },
        fala(assunto = 'Qualquer assunto'){ //funcções dentro de objetos são chmados de methodos
            return `${this.nome} está falando do ${this.assunto}`;
        },
        altura,
        peso,
        //usando getter
        get imc(){ ///ao adicionar o get a funcao passa a ser acessada como atributo
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Natan', 'Alves', 1.73, 97);
//console.log(p1.imc()); //sem o get ele seria acessado como funcao
console.log(p1.imc); 
console.log(p1.nomeCompleto);
//usando o set
p1.nomeCompleto = 'Alanis Novelletto';
console.log(p1.nomeCompleto);

