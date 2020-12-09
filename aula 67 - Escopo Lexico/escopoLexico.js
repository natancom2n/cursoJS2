//escopo Lexico

const nome = 'Natan';

function falaNOme(){
    console.log(nome);//quando a funcao não encontra dentro dela a variavel
    //vai buscar na hierarquia acima
}
falaNOme();

function usaFalaNome(){
    let nome= 'Alves';
    falaNOme();
}
usaFalaNome();