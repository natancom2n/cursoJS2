
const numDigitado = Number(prompt('Digite um número'));
const numeroEntrada = document.getElementById('numeroEntrada');
const texto = document.getElementById('texto');
let inteiro = Number.isInteger(numDigitado);
let raizQuad = numDigitado ** 0.5;
let nann = Number.isNaN(numDigitado);
let paraBaixo = Math.floor(numDigitado);
let paraCima = Math.ceil(numDigitado);
let simplificado = numDigitado.toFixed(2); 

numeroEntrada.innerHTML = numDigitado;
texto.innerHTML = `<p>Seu número + 2 é ${numDigitado + 2}.</p>
                    <p>Raiz quadrada: ${raizQuad}</p>
                    <p>${numDigitado} é inteiro: ${inteiro}. </p>
                    <p>É NaN: ${nann}. </p>
                    <p>Arredondado para baixo é: ${paraBaixo}</p>
                    <p>Arredondado para cima é: ${paraCima}.</p>
                    <p>Com duas casas decimais: ${simplificado}</p>.`;
    

