
// const nome = 'Natan';
// let i = 0;

// while ( i <= 10) {
//     console.log(i);
//     //atention never forget 
//     i++;
// }
// i =0;
// while (i < nome.length){
//     console.log(nome[i]);
//     i++;
// }

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random (1,50);
while (rand !== 10){
    rand = random(1,50);
    console.log(rand);
    
}