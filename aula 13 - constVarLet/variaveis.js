//exercicio constange

const nome = `Natan Alves`
const sobrenome = `Pinto`
const idade = 37;
const peso = 97;
const altura = 1.72;

//fazer calculo IMC peso : (altura * altura);
let calcAltura = altura * altura;
//console.log('calc Aluura =',calcAltura);
let imc = peso / calcAltura;
let ano = 2020 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, 
tem altura de ${altura} e seu IMC é de ${imc}`);
console.log (`${nome} ${sobrenome} nasceu em ${ano}`);