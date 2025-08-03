// Lista onde os nomes
let listaDeAmigos = [];

// Coloca o título da página
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Amigo Secreto';

// Coloca o subtítulo
let titulo2 = document.querySelector('h2');
titulo2.innerHTML = 'Digite o nome dos seus amigos';

// Função chamada ao clicar no "Adicionar" , o trim remove espaços desnecessários
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); 

    if (nome === '') {
        alert("Por favor, digite um nome.");
        return;
    }
// ver se o nome ja foi escrito
    if (listaDeAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        input.value = '';
        return;
    }

    // Adiciona o nome na lista
    listaDeAmigos.push(nome);

    // Mostra a lista na tela
    atualizarLista();

    // Limpa o campo
    input.value = '';
    
}

// Atualiza o conteúdo da <ul id="listaAmigos">
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}
