 const h1 = document.querySelector('.container h1');

 const data = new Date();

function getDsemana(date) {
     
     let diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira' , 'Quarta-feira', 'Quinta-feira', 'Sábado' ];
     return diasSemana[date];  

     // let diaDaSemanaTX;

     // switch (date) {
     //      case 0:
     //           return diaDaSemanaTX = 'Domingo';
     //      case 1:
     //           return diaDaSemanaTX = "Segunda-feira";
     //      case 2:
     //           return diaDaSemanaTX = 'Terça';
     //      case 3:
     //           return diaDaSemanaTX = 'Quarta';
     //      case 4:
     //           return diaDaSemanaTX = 'Quinta-feira';
     //      case 5:
     //           return diaDaSemanaTX = 'Sexta';
     //      case 6:
     //           return diaDaSemanaTX = 'Sabado';
     //      //caso não seja nenhuam das acima. 
     //      default:
     //           return diaDaSemanaTX = '';
     // }

}

function getNomeMes(numeroMes) {
    
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio' , 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes];
    
    //let nomeMes;

     // switch (numeroMes) {
     //      case 0:
     //           nomeMes = 'janeiro';
     //           return nomeMes;
     //      case 1:
     //           nomeMes = 'fevereiro';
     //           return nomeMes;
     //      case 2:
     //           nomeMes = 'março';
     //           return nomeMes;
     //      case 3:
     //           nomeMes = 'abril';
     //           return nomeMes;
     //      case 4:
     //           nomeMes = 'maio';
     //           return nomeMes;
     //      case 5:
     //           nomeMes = 'junho';
     //           return nomeMes;
     //      case 6:
     //           nomeMes = 'julho';
     //           return nomeMes;
     //      case 7:
     //           nomeMes = 'agosto';
     //           return nomeMes;
     //      case 8:
     //           nomeMes = 'setembro';
     //           return nomeMes;
     //      case 9:
     //           nomeMes = 'outubro';
     //           return nomeMes;
     //      case 10:
     //           nomeMes = 'novembro';
     //           return nomeMes;
     //      case 11:
     //           nomeMes = 'dezembro';
     //           return nomeMes;
     // }
     
}
function zeroAEsq (num){
     return num >=10 ? num :`0${num}`;
 }

function criaData(data){

     let diaSemana = data.getDay();
     let numeroMes = data.getMonth();
     let nomeDia = getDsemana(diaSemana);
     let nomeMes = getNomeMes(numeroMes);

     return (`${nomeDia}, ${zeroAEsq( data.getDate())} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsq(data.getHours())}:${zeroAEsq(data.getMinutes())}`);

}

h1.innerHTML = criaData(data);


//forma mais curta encontrada na docuemntação do Date()
// const h1 = document.querySelector('.container h1');

// const data = new Date();
// let opcoes = {
//      dateStyle: 'full',
//      timeStyle: 'short'
// };
// h1.innerHTML = data.toLocaleDateString('pt-BR' , opcoes);

