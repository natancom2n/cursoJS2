// try {
//     console.log(naoExisto);
// }catch(err){
//     console.log("var não existente");
// }

// function soma( x, y){
//     if (typeof x !== 'number' || typeof y !== 'number'){
//         throw new Error('x e y precisam ser numeros');
//     }

//     return x + y;
// }

// try{
//     console.log(soma(1,2));
//     console.log(soma('1', 2));
// }catch(error){
//     console.log('Erro mais amigavel para usuario');
// }finally{
//     console.log('Finally: eu sempre sou executado');
// }

// console.log("####################################");

function retornaHora (data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date.');
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', { hour12: false});
}
try {
    const data = new Date ('05-08-1983 12:58:10');
    const hora = retornaHora(11);
    console.log(hora);
} catch (e){
    //tratar erro
}finally{
    console.log('have a nice day');
}