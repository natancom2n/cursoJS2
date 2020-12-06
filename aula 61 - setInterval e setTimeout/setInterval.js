
function mostraHora() {
    
    let data = new Date();
    return data.toLocaleTimeString('pt-Br', { } );
}



//se passar a funcao sem os () no final ela não é executada, é apenas enviado
//funcao abaixo fica repetindo eternament
const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);

//funcao abaixo faz com que a funcao acima 
setTimeout ( function(){
    clearInterval(timer);
}, 3000); //intervalor em milisegundos


setTimeout(function(){
    console.log('Olá MUndo');
}, 5000);