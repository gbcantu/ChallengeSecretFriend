// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor inserido no campo de texto
    const nome = document.getElementById("nomeAmigo").value;

    // Valida se o campo está vazio
    if (nome.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Limpa o campo de texto
    document.getElementById("nomeAmigo").value = "";

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");

    // Limpa a lista atual
    lista.innerHTML = "";

    // Percorre o array de amigos e adiciona um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se o array não está vazio
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome sorteado
    document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
