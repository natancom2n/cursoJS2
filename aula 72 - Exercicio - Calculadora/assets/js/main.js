
function criaCalculadora(){     
    return{
        //atributos abaixo
        visor: document.querySelector('.display'),





        ///metodos abaixo 
        inicia() {
            this.cliqueBotoes();
            
        },
        cliqueBotoes(){
            document.addEventListener('click', function(e) {
                    const el = e.target;
                    console.log(this);
                    if(el.classList.contains('btn-num')){
                    this.btnParaVisor();
                    }
            });
        },
        

    };
}
const calculadora = criaCalculadora();
//chamar o inicia par rodar a calculadora
calculadora.inicia();