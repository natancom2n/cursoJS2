function getDsemana(date){

    let diaDaSemanaTX;

    switch (diaDaSemana){
        case 0:
            return diaDaSemanaTX = 'Domingo';            
        case 1:
            return diaDaSemanaTX = "Segunda";            
        case 2:
            return diaDaSemanaTX = 'Terça';            
        case 3:
            return diaDaSemanaTX = 'Quarta';            
        case 4:
            return diaDaSemanaTX = 'Quinta';            
        case 5:
            return diaDaSemanaTX = 'Sexta';            
        case 6:
            return diaDaSemanaTX = 'Sabado';            
        //caso não seja nenhuam das acima. 
        default:
            return diaDaSemanaTX = '';                 
        }  

}

const data = new Date('1987-04-21 00:00:00');

 const diaDaSemana = data.getDay();
let diaDaSemanaTX = getDsemana(diaDaSemana);

/* switch (diaDaSemana){
    case 0:
        diaDaSemanaTX = 'Domingo';
        break;
    case 1:
        diaDaSemanaTX = "Segunda";
        break;
    case 2:
        diaDaSemanaTX = 'Terça';
        break;
    case 3:
        diaDaSemanaTX = 'Quarta';
        break;
    case 4:
        diaDaSemanaTX = 'Quinta';
        break;
    case 5:
        diaDaSemanaTX = 'Sexta';
        break;
    case 6:
        diaDaSemanaTX = 'Sabado';
        break;
    //caso não seja nenhuam das acima. 
    default:
        diaDaSemanaTX = ''; 

    } */
console.log(diaDaSemana, diaDaSemanaTX);