// const inputTarefa = document.querySelector('#tarefa');
// const buttonAddTarefa = document.querySelector('#add');
// const containerLista = document.querySelector('.container-lista');
// const criarLi = document.createElement("li");

// function criarLista() {
//     const inputTarefaValor = inputTarefa.value;
//     const criarButton = document.createElement("button");

//     criarLi.textContent = inputTarefaValor;
//     criarButton.textContent = 'Apagar';

//     criarButton.addEventListener('click', function() {
//         containerLista.removeChild(criarLi);
//     });

//     criarLi.appendChild(criarButton);
//     containerLista.appendChild(criarLi);

//     inputTarefa.value = '';
// }

// function apagarTarefa() {
//     console.log(criarLi);
// };

// buttonAddTarefa.addEventListener('click', criarLista);
// criarLi.addEventListener('click', apagarTarefa)

const inputTarefa = document.querySelector('#tarefa');
const buttonAddTarefa = document.querySelector('#add');
const containerLista = document.querySelector('.container-lista');

function criarLista() {
    const inputTarefaValor = inputTarefa.value;

    const criarLi = document.createElement("li");
    criarLi.textContent = inputTarefaValor;

    const criarButton = document.createElement("button");
    criarButton.textContent = 'Apagar';

    criarButton.addEventListener('click', function() {
        containerLista.removeChild(criarLi);
    });

    criarLi.appendChild(criarButton);
    containerLista.appendChild(criarLi);

    inputTarefa.value = '';
}

buttonAddTarefa.addEventListener('click', criarLista);
