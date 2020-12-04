

//const data = new Date(); // ordem seria  a, m, d, h, m, s, ms todos number começando zero
//console.log(data.toString());

 const data2 = new Date('2019-04-20 20:20:50');
console.log(data2.toString()); 

/* console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() +1); //começa zero janeiro ===0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Dia semana', data.getDay()); */  //0 == domingo, 6 - sabado  0 ate 6

// obter a data atual
// console.log(Date.now()); //desde o marco zero até dia de hoje em milésimos de segundos

// função para adicionar zero a esquerda 
function zeroAEsq (num){
    return num >=10 ? num :`0${num}`;
}

function formataData(data){
    const dia = zeroAEsq (data.getDate());
    const mes = zeroAEsq (data.getMonth() + 1);
    const ano = zeroAEsq (data.getFullYear());
    const hora = zeroAEsq (data.getHours());
    const min = zeroAEsq (data.getMinutes());

    return `${dia}/${mes}/${ano}/${hora}:${min}`;
    
}
const data = new Date();
const dataBrasil= formataData(data);
console.log(dataBrasil);


