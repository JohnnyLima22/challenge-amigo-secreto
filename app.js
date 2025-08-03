// Lista onde os nomes serão armazenados
let listaDeAmigos = [];

// Coloca o título da página
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Amigo Secreto';

// Coloca o subtítulo
let titulo2 = document.querySelector('h2');
titulo2.innerHTML = 'Digite o nome dos seus amigos';

// Função clicar no "Adicionar" .trim usando para tirar espaços. 
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === '') {
        alert("Por favor, digite um nome.");
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        input.value = '';
        return;
    }
    
    // Adiciona o nome na lista
    listaDeAmigos.push(nome);
}