

for (let i = 0; i <= 5; i++){

    console.log(`Linha ${i}`);
}

//iniciar de qualquer numero e para em qualquer numero
for (let i = 400; i <= 405; i++){

    console.log(`Linha ${i}`);
}

//modificar para incrementar de 10 em 10
for (let i = 1000; i <= 1050; i+= 10){

    console.log(`Linha ${i}`);
}

//numero negativo
for (let i = -10; i <= 10; i+= 4){

    console.log(`Linha ${i}`);
}

//utilizando decrementar
for (let i = 10; i >= 5; i--){

    console.log(`Linha ${i}`);
}

//chgar se o numero é par ou impar
for (let i = 1; i <= 5; i++){
    let par = i % 2 === 0; 
    console.log(i, par);
}

//implemntando melhor
for (let i = 1; i <= 5; i++){
    let par = i % 2 === 0 ? 'Par' : 'Ímpar'; 
    console.log(i, par);
}

const frutas = ['Maça' , 'Laranja' , 'Uva'];
for (let i = 0; i < frutas.length; i++){
    console.log(`índice ${i}`,frutas[i]);
}