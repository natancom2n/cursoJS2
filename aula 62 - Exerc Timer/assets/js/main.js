function relogio() {
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    let estaRodando = false;

    document.addEventListener('click', function (e) {
        const el = e.target;
        //console.log(e);//pega ou captura o local  aonde está clicando

        if (el.classList.contains('zerar')) {
            //console.log('você clicou em zerar');
            clearInterval(timer);
            segundos = 0;
            relogio.classList.remove('pausado');
            relogio.innerHTML = '00:00:00'
            estaRodando = false;
        }
        if (el.classList.contains('iniciar')) {
            //alert("botao foi apertado");
            if (estaRodando) {
                return undefined;
            }
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
            estaRodando = true;
        }
        if (el.classList.contains('pausar')) {
            if(segundos === 0) return undefined;
            relogio.classList.add('pausado');
            clearInterval(timer);
            estaRodando = false;
        }
    });

    function mostrarSegundos(segundos) {
        let data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', { timeZone: 'UTC' });
    }
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = mostrarSegundos(segundos);

        }, 1000);
    }


}
relogio();
