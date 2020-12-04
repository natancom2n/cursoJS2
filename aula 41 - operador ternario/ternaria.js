// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUser = 900;
const nivelUser = pontuacaoUser >= 1000 ? 'Usuário VIP' : 'Usuario Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
console.log(nivelUser, corPadrao);
/*
if (pontuacaoUser >= 1000) {
    console.log('é um usuário VIP');
}else{
    console.log('Usuário Normal');
} */

