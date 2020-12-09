
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefas = document.querySelector('.btn-tarefas');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

//para pegar a tecla ENTER e funcionar como apertar o botao
inputTarefa.addEventListener('keypress', function (e) { //teclas podem ser keypress, keyup, keydown
    //usar abaixo para identiicar o key code da tecla que deseja
    //console.log(e);
    if (e.keyCode === 13) {
        //identifica se o input não está vazio
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }

});

//função para limpar o input
function limpaInput() {
    inputTarefa.value = '';
    //focus é para o cursos ficar piscando
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    //dar um espaço entre texto e botao
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    //adicionando atributo class na gaz html do button = <burron classe="apagar"
    btnApagar.setAttribute('class', 'apagar');
    //criar titulo para aparecer quando mouse estiver em cima
    btnApagar.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(btnApagar);
}

//funcçaõ principal
function criaTarefa(txtInput) {
    //console.log(txtInput);
    const li = criaLi();
    li.innerText = txtInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvaTarefas();

}

btnTarefas.addEventListener('click', function () {
    //identifica se o input não está vazio
    if (!inputTarefa.value) return;
    //console.log(inputTarefa.value);
    criaTarefa(inputTarefa.value);
});

//criar a funcionalidade apagar de dentro do btnApagar
document.addEventListener('click', function (e) {
    const el = e.target; //para ver qual botao esta sendo apertado

    //verificar se o botao que estṕa sendo clicado contém a classe apagar
    if (el.classList.contains('apagar')) {
        //console.log(el.parentElement);
        el.parentElement.remove();
        //console.log('apagar ');
        salvaTarefas();
    }
});

//funcçao para salvar 
function salvaTarefas(){
    //1° pegar os LI's  das taregas
    const liTarefas = tarefas.querySelectorAll('li');
    //console.log(liTarefas);
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar' , '').trim();
        //console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto);
    }

    //conteudo sobre JSON
    //transformando um array em string, depois pode retornar a ser array
    const tarefasJSON = JSON.stringify(listaDeTarefas);

    //adicionando ao localStorage
    //               tareffas é o nome utilizado para recuperar(buscar novamente)o Item dentro do LocalSt em se
    //o campo aonde fica o tarefasJSON obrigatoriamente deveser uma string
    localStorage.setItem('tareffas', tarefasJSON);

    //console.log(tarefasJSON);

}

//ler o Storage e jogar novamente na pagina quando for atualizado a pagina
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tareffas');
    //retornar de String para array
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }

}
adicionaTarefasSalvas();