const paragrafos = document.querySelector('.paragrafos');

//pega dentro da div paragrafos tosos os p's e forma uma nodeList (não é um array)
const ps = paragrafos.querySelectorAll('p');

//get the color of body
const stilosBody = getComputedStyle(document.body);

const bgColorBody = stilosBody.backgroundColor;
console.log(bgColorBody);

for (let p of ps){
    p.style.backgroundColor = bgColorBody;
    p.style.color = '#fff';
    

}