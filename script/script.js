let listaSubstituicao = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

// Função para remover acentos
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para limpar a div do resultado
function limparResultado() {
    var resultadoDiv = document.getElementById("resultado__div");
    resultadoDiv.innerHTML = "";  // Limpa o conteúdo da div
}

function criptografar() {
    var resultadoDiv = document.getElementById("resultado__div");
    var imagem = document.getElementById("mensagem-nao-encontrada");
    var palavra = document.getElementById("escrito").value;

    console.log("Original:", palavra);

    // Limpar o conteúdo da div do resultado
    limparResultado();

    // Converter para minúsculas e remover acentos
    palavra = palavra.toLowerCase();
    palavra = removerAcentos(palavra);

    console.log("Normalizado:", palavra);

    // Função para aplicar todas as substituições de listaSubstituicao
    function substituirTudo(texto, substituicoes) {
        for (let chave in substituicoes) {
            if (substituicoes.hasOwnProperty(chave)) {
                texto = texto.replaceAll(chave, substituicoes[chave]);
            }
        }
        return texto;
    }

    // Aplicar substituições
    let campoT = substituirTudo(palavra, listaSubstituicao);

    console.log("Criptografado:", campoT);

    if (palavra === "") {
        alert("Digite algo válido");
    } else {
        imagem.style.display = "none";
        resultadoDiv.innerHTML = campoT;

        // Exibir botão de copiar
        var copiarBotao = document.getElementById("copiar");
        copiarBotao.classList.remove("d-none");
    }
}

function descriptografar() {
    var resultadoDiv = document.getElementById("resultado__div");
    var imagem = document.getElementById("mensagem-nao-encontrada");
    var palavra = document.getElementById("escrito").value;

    console.log("Original:", palavra);

    // Limpar o conteúdo da div do resultado
    limparResultado();

    // Converter para minúsculas e remover acentos
    palavra = palavra.toLowerCase();
    palavra = removerAcentos(palavra);

    console.log("Normalizado:", palavra);

    // Função para aplicar todas as substituições de listaSubstituicao
    function substituirTudo(substituicoes, texto) {
        for (let chave in substituicoes) {
            if (substituicoes.hasOwnProperty(chave)) {
                texto = texto.replaceAll(substituicoes[chave], chave);
            }
        }
        return texto;
    }

    // Aplicar substituições
    let campoT = substituirTudo(listaSubstituicao, palavra);

    console.log("Descriptografado:", campoT);

    if (palavra === "") {
        alert("Digite algo válido");
    } else {
        imagem.style.display = "none";
        resultadoDiv.innerHTML = campoT;

        // Exibir botão de copiar
        var copiarBotao = document.getElementById("copiar");
        copiarBotao.classList.remove("d-none");
    }
}

function copiarTexto() {
    var resultado = document.getElementById("resultado__div").innerText;

    // Cria um elemento de texto temporário para copiar o conteúdo
    var elementoTemporario = document.createElement("textarea");
    elementoTemporario.value = resultado;
    document.body.appendChild(elementoTemporario);

    // Seleciona e copia o texto
    elementoTemporario.select();
    document.execCommand("copy");

    // Remove o elemento temporário
    document.body.removeChild(elementoTemporario);

    // Recarrega a página
    window.location.reload();
}

