const result = document.querySelector('section.container');
const div = document.createElement('div');
result.appendChild(div);

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    console.log(tag);
    createElement(tag, texto);
    
}

function createElement(tag, texto) {
    const element = document.createElement(tag);
    element.innerText = texto;
    div.appendChild(element);
}
