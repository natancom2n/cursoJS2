//rand criado par simular que cada funcao ira fazer um trabalho a parte 
//ex pegar dados de uma API ou buscar dados em um banco
//e cada uma terá um tempo de retorno aleatorio
function rand(min = 1000, max=3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand());


function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());
}
function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
}
function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}
// f1();
// f2();
// f3();

//nesse caso vc escolher o a ordem
f1(function (){
    f2(function(){
        f3(function(){
        console.log('ola mundo');
        });
    })
});

//melhorar a identação
f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}
function f2Callback(){
    f3(f3Callback);
}
function f3Callback(){
    console.log('ola mundo');    
}
