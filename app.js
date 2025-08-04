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
    //para o cursor ficar dentro do campo de digitação
    input.focus();
    
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

// sortear e condição de quantidade minima para o sorteio.
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }

    // Sorteia um índice aleatório da lista
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    // Mostra o nome sorteado na tag <h2>
    let titulo2 = document.querySelector('h2');
    titulo2.textContent = `Amigo sorteado: ${amigoSorteado}`;

    // Esconde a lista após o sorteio
    let lista = document.getElementById("listaAmigos");
    lista.style.display = "none";
}

function reiniciar() {
    // Mostra a lista de novo
    let lista = document.getElementById("listaAmigos");
    lista.style.display = "block";

    // Limpa o h2
    let titulo2 = document.querySelector("h2");
    titulo2.textContent = "Digite o nome dos seus amigos";

    //Esvaziar a lista de amigos
    listaDeAmigos = [];
    lista.innerHTML = '';
}