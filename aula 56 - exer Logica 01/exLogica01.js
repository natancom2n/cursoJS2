
function maioMenor(n1, n2){ console.log(Math.max (n1, n2)); }
maioMenor(50, 6);

const maioMenor2 = (n1, n2) => console.log(Math.max (n1, n2));
maioMenor2(5, 16);

//usando if com arrow function
const usandoArrow = (x, y) => x > y ? x : y;
console.log(usandoArrow(12, 24));