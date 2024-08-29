const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefa = document.querySelector('.tarefas');

//Cria uma li dentro da ul.
function criarLi() {
    const li = document.createElement('li');
    return li;
}

//Se for pressionado entrer, irá ativar a função para criar a tarefa.
inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

//Limpar o input e faz focar.
function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

//Cria um botão de apagar com uma classe dentro de uma li.
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    li.appendChild(botaoApagar);
}

//Recebe o texto e cria a lista com o texto dentro.
function criaTarefa(textoInput) {
    const li = criarLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);
    limparInput(); //Após criar, é limpado o input
    criaBotaoApagar(li); //Criado o botão de apagar no li.
    salvarTarefa(); //Salva a tarefa para ser recuperada depois
}

//Ao clicar no botão de tarefa, é checado se o input está vazio, caso mão esteja, cria a tarefa.
btnTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

//Checa qual elemento foi clicado e se estiver clicado no elemento que possui a classe apagar, é removido o pai do botão
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();
    }
});

//Salva as tarefas para serem recuperdas depois
function salvarTarefa() {
    const liTarefas = tarefa.querySelectorAll('li'); //Seleciona a lista
    const listaDeTarefas = [];

    //For para pegar os valores do inputs e remover os botões de apagar.
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto); //Adicionando os valores a um array.
    }

    //Salva o array em um json de string.
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON); //Salva em uma variável local do navegador
}

//Adiciona a tarefa salva, logo após que for atualizado ou fechado a página.
function adicionarTarefaSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    //Recria as tarefas.
    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionarTarefaSalvas();